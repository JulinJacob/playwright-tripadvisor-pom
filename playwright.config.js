// @ts-check

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    timeout: 60000,

    use: {

        browserName: 'chromium',

        headless: false,

        viewport: {
            width: 1280,
            height: 720
        },

        screenshot: 'only-on-failure',

        video: 'retain-on-failure'
    },

    reporter: [
        ['html'],
        ['list']
    ]
});