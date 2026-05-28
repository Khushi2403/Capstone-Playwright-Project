class ProductPage {

    constructor(page) {

        this.page = page;

        this.searchBox = page.locator('#small-searchterms');

        this.searchButton = page.locator('input[value="Search"]');

        this.productTitles = page.locator('.product-title a');

        this.sortDropdown = page.locator('#products-orderby');

        this.viewDropdown = page.locator('#products-viewmode');

        this.addToCartButton = page.locator('.product-essential .add-to-cart-button');
        
        this.breadcrumb = page.locator('.breadcrumb');

        this.nextPageButton = page.locator('.next-page a');

        this.productGrid = page.locator('.product-grid');

        this.productList = page.locator('.product-list');

        this.productPrice = page.locator('.product-price');
        
        this.pageTitle = page.locator('.product-name h1');

        this.noResultMessage = page.locator('.result');
    }


    async gotoHomePage() {

        await this.page.goto(
            'https://demowebshop.tricentis.com/'
        );
    }


    async searchProduct(productName) {

        await this.searchBox.fill(productName);

        await this.searchButton.click();
    }

     async openCategory(categoryName) {

    await this.page.goto(
        `https://demowebshop.tricentis.com/${categoryName}`
    );
}
   


   async sortProducts(sortOption) {

    await this.sortDropdown.waitFor({
        state: 'visible'
    });

    await this.sortDropdown.selectOption({
        label: sortOption
    });
}

    async selectViewMode(mode) {

        await this.viewDropdown.selectOption(mode);
    }

    async openFirstProduct() {

    await this.productTitles.first().waitFor({
        state: 'visible'
    });

    await this.productTitles.first().click();

    await this.page.waitForLoadState('networkidle');
}
    

    async clickNextPage() {

    await this.nextPageButton.waitFor({
        state: 'visible'
    });

    await this.nextPageButton.click();
}
    

async switchToGridView() {

    await this.viewDropdown.selectOption({
        label: 'Grid'
    });
}

async switchToListView() {

    await this.viewDropdown.selectOption({
        label: 'List'
    });
}


}

module.exports = ProductPage;