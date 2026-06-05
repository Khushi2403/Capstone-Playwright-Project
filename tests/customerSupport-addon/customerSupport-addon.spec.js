const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://demowebshop.tricentis.com';

test.describe('Customer Support', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('TC01 Contact us page', async ({ page }) => {
    await page.click('text=Contact us');
    await expect(page.locator('#Email')).toBeVisible();
  });

 test('TC02 Invalid email validation', async ({ page }) => {

  await page.goto(`${BASE_URL}/contactus`);
  await page.fill('#Email', 'wrongemail');
  await page.fill('#Enquiry', 'test enquiry');
  await page.click('input[name="send-email"]');
  await expect(
    page.locator('.field-validation-error').first()
  ).toBeVisible();
});

  test('TC03 Valid contact form UI', async ({ page }) => {
    await page.goto(`${BASE_URL}/contactus`);
    await expect(page.locator('#Enquiry')).toBeVisible();
  });

  test('TC04 Newsletter field', async ({ page }) => {
    await expect(page.locator('#newsletter-email')).toBeVisible();
  });

  test('TC05 Search box visible', async ({ page }) => {
  await expect(page.locator('#small-searchterms')).toBeVisible();
  });

  test('TC06 Logo visible', async ({ page }) => {
  await expect(page.locator('.header-logo')).toBeVisible();
  });


  test('TC07 Search box visible', async ({ page }) => {
    await expect(page.locator('#small-searchterms')).toBeVisible();
  });

  test('TC08 Page structure visible', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

  test('TC09 Sitemap page', async ({ page }) => {
    await page.click('text=Sitemap');
    await expect(page).toHaveURL(/sitemap/);
  });

  test('TC10 Orders page link', async ({ page }) => {
    await page.click('text=Orders');
    await expect(page).toHaveURL(/order/);
  });

  test('TC11 Wishlist link', async ({ page }) => {
    await page.click('text=Wishlist');
    await expect(page).toHaveURL(/wishlist/);
  });

  test('TC12 Cart link', async ({ page }) => {
    await page.click('text=Shopping cart');
    await expect(page).toHaveURL(/cart/);
  });

  test('TC13 My account navigation', async ({ page }) => {
  await page.click('text=My account');
  await expect(page).toHaveURL(/login|account|demo/);
});

  test('TC14 Header visibility', async ({ page }) => {
    await expect(page.locator('.header')).toBeVisible();
  });

  test('TC15 Page load check', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC16 Contact Us navigation stability', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  await page.click('text=Contact us');

  await expect(page).toHaveURL(/contactus/);
  await expect(page.locator('#Email')).toBeVisible();
});

test('TC17 Contact form required field validation', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/contactus');

  await page.click('input[name="send-email"]');

  await expect(page.locator('.field-validation-error').first()).toBeVisible();
});

test('TC18 Search functionality validation', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  await page.fill('#small-searchterms', 'book');
  await page.click('input[value="Search"]');

  await expect(page).toHaveURL(/search/);
});

test('TC19 Newsletter subscription validation', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  await expect(page.locator('#newsletter-email')).toBeVisible();

  await page.fill('#newsletter-email', 'test@test.com');
  await page.click('#newsletter-subscribe-button');

  await expect(page.locator('#newsletter-result-block')).toBeVisible();
});

test('TC20 Sitemap navigation validation', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  await page.click('text=Sitemap');

  await expect(page).toHaveURL(/sitemap/);
  await expect(page.locator('body')).toBeVisible();
});

});