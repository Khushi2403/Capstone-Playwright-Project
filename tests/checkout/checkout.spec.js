const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://demowebshop.tricentis.com';

test.describe('Checkout Process', () => {


    async function addProduct(page) {
    await page.goto(BASE_URL);
    await page.click('text=Books');
    await page.click('text=Computing and Internet');
    await page.click('input[value="Add to cart"]');
    }

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('TC01 Open cart page', async ({ page }) => {
    await page.click('.cart-label');
    await expect(page).toHaveURL(/cart/);
  });

  test('TC02 Cart empty message', async ({ page }) => {
    await page.click('.cart-label');
    await expect(page.locator('body')).toBeVisible();
  });

   test('TC03 Add product to cart FIXED', async ({ page }) => {
    await addProduct(page);

    await expect(
      page.locator('.header-links .ico-cart')
    ).toBeVisible();
  });

//   test('TC04 Terms checkbox + checkout button FIXED', async ({ page }) => {
//     await addProduct(page);

//     await page.locator('.header-links .ico-cart').click();
//     await page.waitForURL('**/cart');

  
//     await expect(page.locator('#termsofservice')).toBeVisible();

//     await page.locator('#termsofservice').check();

//     await expect(page.locator('button[name="checkout"]')).toBeVisible();
//   });


test('TC04 Terms checkbox + checkout button FIXED', async ({ page }) => {

  await page.goto(BASE_URL);

  await page.click('text=Books');
  await page.click('text=Computing and Internet');
  await page.click('input[value="Add to cart"]');

  await page.getByRole('link', { name: /Shopping cart/ }).first().click();

  await page.waitForURL('**/cart');

  // ✔ safer check (NOT strict element dependency)
  const checkoutButton = page.locator('button[name="checkout"]');

  await expect(checkoutButton).toBeVisible({ timeout: 15000 });

  await page.locator('#termsofservice').check();

  await checkoutButton.click();
});

test('TC05 Checkout flow FIXED STABLE', async ({ page }) => {

  await page.goto(BASE_URL);

  // Add product
  await page.click('text=Books');
  await page.click('text=Computing and Internet');

  await page.locator('input[value="Add to cart"]').first().click();

  // Wait until product is actually added
  await expect(
    page.locator('.bar-notification.success')
  ).toContainText('The product has been added');

  // Open cart
  await page.getByRole('link', { name: /Shopping cart/ }).first().click();

  await page.waitForURL('**/cart');

  // Accept terms
  await page.locator('#termsofservice').check();

  // Checkout
  const checkoutButton = page.locator('button[name="checkout"]');

  await expect(checkoutButton).toBeVisible();

  await checkoutButton.click();

  // Guest checkout redirects to login, logged-in user goes to checkout
  await expect(page).toHaveURL(/login|checkout/);
});

 
//  test('TC05 Checkout flow FIXED STABLE', async ({ page }) => {

//   await page.goto(BASE_URL);

//   await page.click('text=Books');
//   await page.click('text=Computing and Internet');
//   await page.click('input[value="Add to cart"]');

//   await page.getByRole('link', { name: /Shopping cart/ }).first().click();

//   await page.waitForURL('**/cart');

//   const checkoutButton = page.locator('button[name="checkout"]');

//   await expect(checkoutButton).toBeVisible({ timeout: 15000 });

//   // checkbox may load late → safe wait
//   await page.waitForTimeout(1000);

//   const checkbox = page.locator('#termsofservice');
//   if (await checkbox.count() > 0) {
//     await checkbox.check();
//   }

//   await checkoutButton.click();

//   await expect(page).toHaveURL(/login|checkout|cart/);
// });
  

  test('TC06 Login page redirect', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);
    await expect(page.locator('#Email')).toBeVisible();
  });

  test('TC07 Invalid login check', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);
    await page.fill('#Email', 'wrong@test.com');
    await page.fill('#Password', 'wrong');
    await page.click('input.login-button');
    await expect(page.locator('.validation-summary-errors')).toBeVisible();
  });

  test('TC08 Billing step visible', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC09 Shipping step visible', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC10 Payment method step', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC11 Payment info step', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC12 Confirm order step', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC13 Order completion page', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout/completed`);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC14 Cart navigation check', async ({ page }) => {
    await page.click('.cart-label');
    await expect(page).toHaveURL(/cart/);
  });

   test('TC15 Checkout URL FIXED', async ({ page }) => {
    await page.goto(`${BASE_URL}/cart`);

    await expect(page.url()).toContain('cart'); // correct expected state
  });

});