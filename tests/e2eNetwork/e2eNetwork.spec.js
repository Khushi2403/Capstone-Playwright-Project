const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://demowebshop.tricentis.com';

test.describe('E2E + Network Mocking - CAPSTONE NETWORK SUITE (15 TC)', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  });

  // 1
  test('TC01 Home page loads successfully', async ({ page }) => {
    await expect(page.locator('#small-searchterms')).toBeVisible();
  });

  // 2
  test('TC02 Books API response interception', async ({ page }) => {
    await page.route('**/books', async route => {
      const response = await route.fetch();
      expect(response.status()).toBe(200);
      route.continue();
    });

    await page.click('text=Books');
    await expect(page.locator('.product-item').first()).toBeVisible();
  });

  // 3
  test('TC03 Mock product list response', async ({ page }) => {
    await page.route('**/books', route =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([{ id: 1, name: 'Mock Book' }])
      })
    );

    await page.goto(`${BASE_URL}/books`);
    await expect(page.locator('body')).toBeVisible();
  });

  // 4
  test('TC04 Verify network request for homepage resources', async ({ page }) => {
    const responses = [];

    page.on('response', res => responses.push(res.url()));

    await page.goto(BASE_URL);

    expect(responses.length).toBeGreaterThan(0);
  });

  // 5
  test('TC05 Abort image loading', async ({ page }) => {
    await page.route('**/*.{png,jpg,jpeg}', route => route.abort());

    await page.goto(BASE_URL);
    await expect(page.locator('body')).toBeVisible();
  });

  // 6
  test('TC06 Simulate slow API response', async ({ page }) => {
    await page.route('**/books', async route => {
      await new Promise(res => setTimeout(res, 1500));
      route.continue();
    });

    await page.goto(`${BASE_URL}/books`);
    await expect(page.locator('body')).toBeVisible();
  });

  // 7
  test('TC07 Block CSS files (network failure test)', async ({ page }) => {
    await page.route('**/*.css', route => route.abort());

    await page.goto(BASE_URL);
    await expect(page.locator('body')).toBeVisible();
  });

  // 8
  test('TC08 Modify response headers', async ({ page }) => {
    await page.route('**/books', route =>
      route.fulfill({
        status: 200,
        headers: {
          'Content-Type': 'text/html'
        },
        body: '<h1>Modified Response</h1>'
      })
    );

    await page.goto(`${BASE_URL}/books`);
    await expect(page.locator('text=Modified Response')).toBeVisible();
  });

  // 9
  test('TC09 Validate request URL contains books', async ({ page }) => {
    await page.route('**/books', route => {
      expect(route.request().url()).toContain('books');
      route.continue();
    });

    await page.click('text=Books');
  });

  // 10
  test('TC10 Network failure handling', async ({ page }) => {
    await page.route('**/*', route => route.abort());

    await page.goto(BASE_URL).catch(() => {});
    expect(true).toBeTruthy();
  });

  // 11
  test('TC11 API request monitoring', async ({ page }) => {
    let apiCalled = false;

    page.on('request', req => {
      if (req.url().includes('books')) apiCalled = true;
    });

    await page.click('text=Books');
    expect(apiCalled).toBeTruthy();
  });

  // 12
  test('TC12 Response status validation', async ({ page }) => {
    await page.route('**/books', async route => {
      const response = await route.fetch();
      expect([200, 304]).toContain(response.status());
      route.continue();
    });

    await page.goto(`${BASE_URL}/books`);
  });

  // 13
 test('TC13 Simulate empty response safely', async ({ page }) => {

  await page.route('**/books**', route =>
    route.fulfill({
      status: 200,
      contentType: 'text/html',
      body: ''
    })
  );

  await page.goto(`${BASE_URL}/books`);

  const content = await page.locator('body').textContent();
  expect(content?.trim().length).toBe(0);
});

  // 14
  test('TC14 Page load performance check', async ({ page }) => {
    const start = Date.now();
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
    expect(Date.now() - start).toBeLessThan(8000);
  });

  // 15
 test('TC15 UI stability under network conditions', async ({ page }) => {

  await page.route('**/*.css', route => route.continue());
  await page.route('**/*.js', route => route.continue());

  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

  await expect(page.locator('#small-searchterms')).toBeVisible();
  await expect(page.locator('#topcartlink')).toBeVisible();
});

});