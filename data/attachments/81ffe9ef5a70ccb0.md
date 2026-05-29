# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: compareEmail/compareEmail.spec.js >> Compare + Email Module >> TC06 Send Email to Friend
- Location: tests/compareEmail/compareEmail.spec.js:95:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.result')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.result')

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Register":
      - /url: /register
  - listitem:
    - link "Log in":
      - /url: /login
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Categories
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Manufacturers
- list:
  - listitem:
    - link "Tricentis":
      - /url: /tricentis
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
- heading "Email a friend" [level=1]
- heading "14.1-inch Laptop" [level=2]:
  - link "14.1-inch Laptop":
    - /url: /141-inch-laptop
- list:
  - listitem: Only registered customers can use email a friend feature
- text: Friend's email
- textbox "Friend's email":
  - /placeholder: Enter friend's email
  - text: hritik123@gmail.com
- text: Your email address
- textbox "Your email address":
  - /placeholder: Enter your email address
  - text: testuser@example.com
- text: Personal message
- textbox "Personal message":
  - /placeholder: Enter personal message (optional)
  - text: Check this product!
- button "Send email"
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  8   |         await loginPage.gotoLoginPage();
  9   | 
  10  |         await loginPage.login(
  11  |             userData.validUser.email,
  12  |             userData.validUser.password
  13  |         );
  14  | 
  15  |         await compareEmailPage.openComparePage();
  16  | 
  17  |         if (await compareEmailPage.clearCompareBtn.isVisible()) {
  18  |             await compareEmailPage.clearCompare();
  19  |         }
  20  | 
  21  |         await compareEmailPage.gotoHome();
  22  |     });
  23  | 
  24  |     test('TC01 Add product to compare', async ({ compareEmailPage }) => {
  25  | 
  26  |         await compareEmailPage.openProductByIndex(0);
  27  |         await compareEmailPage.addToCompare();
  28  | 
  29  |         await compareEmailPage.openProductByIndex(1);
  30  |         await compareEmailPage.addToCompare();
  31  | 
  32  |         await compareEmailPage.openComparePage();
  33  | 
  34  |         await expect(compareEmailPage.compareTable)
  35  |             .toBeVisible();
  36  | 
  37  |         const comparedProducts = compareEmailPage.page.locator(
  38  |             '.compare-products-table a'
  39  |         );
  40  | 
  41  |         await expect(comparedProducts).toHaveCount(2);
  42  |     });
  43  | 
  44  |    test('TC02 Compare success message', async ({ compareEmailPage }) => {
  45  | 
  46  |     await compareEmailPage.openFirstProduct();
  47  | 
  48  |     await compareEmailPage.addToCompare();
  49  | 
  50  |     await compareEmailPage.openComparePage();
  51  | 
  52  |     await expect(compareEmailPage.compareTable)
  53  |         .toBeVisible();
  54  | 
  55  |     const comparedProducts = compareEmailPage.page.locator(
  56  |         '.compare-products-table a'
  57  |     );
  58  | 
  59  |     await expect(comparedProducts.first())
  60  |         .toBeVisible();
  61  | });
  62  | 
  63  |     test('TC03 Clear compare list', async ({ compareEmailPage }) => {
  64  | 
  65  |         await compareEmailPage.openFirstProduct();
  66  | 
  67  |         await compareEmailPage.addToCompare();
  68  | 
  69  |         await compareEmailPage.openComparePage();
  70  | 
  71  |         await compareEmailPage.clearCompare();
  72  | 
  73  |         await expect(compareEmailPage.noCompareMsg)
  74  |             .toContainText('You have no items to compare.');
  75  |     });
  76  | 
  77  |     test('TC04 Compare page URL validation', async ({ compareEmailPage }) => {
  78  | 
  79  |         await compareEmailPage.openComparePage();
  80  | 
  81  |         await expect(compareEmailPage.page)
  82  |             .toHaveURL(/compareproducts/);
  83  |     });
  84  | 
  85  |     test('TC05 Open Email Friend page', async ({ compareEmailPage }) => {
  86  | 
  87  |         await compareEmailPage.openFirstProduct();
  88  | 
  89  |         await compareEmailPage.openEmailFriend();
  90  | 
  91  |         await expect(compareEmailPage.friendEmail)
  92  |             .toBeVisible();
  93  |     });
  94  | 
  95  |     test('TC06 Send Email to Friend', async ({ compareEmailPage }) => {
  96  | 
  97  |         await compareEmailPage.openFirstProduct();
  98  | 
  99  |         await compareEmailPage.openEmailFriend();
  100 | 
  101 |         await compareEmailPage.sendEmail(
  102 |             'hritik123@gmail.com',
  103 |             userData.validUser.email,
  104 |             'Check this product!'
  105 |         );
  106 | 
  107 |         await expect(compareEmailPage.resultMsg)
> 108 |             .toBeVisible({ timeout: 10000 });
      |              ^ Error: expect(locator).toBeVisible() failed
  109 | 
  110 |         await expect(compareEmailPage.resultMsg)
  111 |             .toContainText('Your message has been sent');
  112 |     });
  113 | 
  114 | });
```