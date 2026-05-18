const { test, expect } = require('@playwright/test');
const { TripAdvisorPage } = require('../pages/tripAdvisorPage');
const { URLS } = require('../utils/urls');
test('Validate Tripadvisor Basic Assertions and Restaurant Search', async ({ page }) => {

    const tripAdvisorPage = new TripAdvisorPage(page);

    await tripAdvisorPage.navigate();

    // Assert the page title
    await expect(page).toHaveTitle(/Tripadvisor/i);

    // Assert two additional visible elements
    await expect(tripAdvisorPage.searchInput).toBeVisible();
    await expect(tripAdvisorPage.searchButton).toBeVisible();
     
    // Search
    await tripAdvisorPage.searchRestaurants();

    await page.waitForLoadState('domcontentloaded');
 
    // Assert at least one restaurant result visible
    await expect(tripAdvisorPage.restaurantResults.first()).toBeVisible();

    //To get the count
     const resultsCount = await tripAdvisorPage.getRestaurantResultsCount();
     console.log(`Restaurant Results Found: ${resultsCount}`);
   // Validate count > 0
    expect(resultsCount).toBeGreaterThan(0);
});