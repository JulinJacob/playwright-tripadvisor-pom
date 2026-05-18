const { URLS } = require('../utils/urls');
class TripAdvisorPage {

    constructor(page) {
        this.page = page;

        // FIXED LOCATORS 
    
        this.searchInput = page.getByRole('searchbox');
        this.searchButton = page.getByRole('button', { name: /search/i });
        this.searchResults = page.locator('a[href*="/Restaurant_Review"]');
    }

    async navigate() {
        await this.page.goto(URLS.TRIPADVISOR, {
            waitUntil: 'domcontentloaded'
        });
    }

    async searchRestaurants() {
        await this.searchInput.fill('Restaurants');
        await this.searchButton.click();
    }

    async getResultsCount() {
        return await this.searchResults.count();
    }
}

module.exports = { TripAdvisorPage };