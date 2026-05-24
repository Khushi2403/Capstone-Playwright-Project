class ProductPage {

    constructor(page) {

        this.page = page;

        this.searchBox = page.locator('#small-searchterms');

        this.searchButton = page.locator('input[value="Search"]');

        this.productTitles = page.locator('.product-title');

        this.sortDropdown = page.locator('#products-orderby');

        this.productImage = page.locator('.picture img');

        this.addToCartButton = page.locator('input[value="Add to cart"]');

        this.breadcrumb = page.locator('.breadcrumb');

        this.nextPageButton = page.locator('.next-page');

        this.gridView = page.locator('.viewmode-icon.grid');

        this.listView = page.locator('.viewmode-icon.list');

        this.noResultMessage = page.locator('.result');

        this.productPrice = page.locator('.prices');

        this.compareButton = page.locator('.compare-products');

        this.productDescription = page.locator('.full-description');
    }


    async gotoHomePage() {

        await this.page.goto('https://demowebshop.tricentis.com/');
    }


    async searchProduct(productName) {

        await this.searchBox.fill(productName);

        await this.searchButton.click();
    }

 
   async openCategory(categoryName) {

    const category = this.page
        .locator('.top-menu a[href="/' + categoryName + '"]')
        .first();

    await category.waitFor({
        state: 'visible'
    });

    await category.click();
}


    async sortProducts(sortOption) {

        await this.sortDropdown.selectOption(sortOption);
    }


    async openFirstProduct() {

        await this.productTitles.first().click();
    }


    async clickNextPage() {

        await this.nextPageButton.click();
    }


    async switchToGridView() {

        await this.gridView.click();
    }


    async switchToListView() {

        await this.listView.click();
    }
}

module.exports = ProductPage;