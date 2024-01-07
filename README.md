# wp-crawler-plugin-test-automation
Automated testing scripts for a WordPress SEO enhancement plugin (WP Crawler) using Cypress.

# WordPress Crawler Plugin Test Automation

Automated testing scripts for a WordPress SEO enhancement plugin using Cypress.

## Overview

This repository contains Cypress automation scripts for testing the features of a WordPress SEO enhancement plugin. The scripts cover installation, crawl triggering, error handling, and result viewing to ensure the reliability of the plugin's functionality.

## Repository Structure

- `cypress/integration/`
  - Contains Cypress test scripts for different features.

- `README.md`
  - Documentation providing an overview, setup instructions, and other relevant details.

## Setup Instructions

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/salraz/wp-crawler-plugin-test-automation.git
    cd wp-crawler-plugin-test-automation
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Run Cypress Tests:**
    ```bash
    npx cypress open
    ```
   - Select the desired test file in the Cypress Test Runner.

## Test Scenarios

1. **Automated Installation Test:**
   - Validates successful installation and activation of the plugin.

2. **Automated Crawl Execution Test:**
   - Verifies manual and automatic crawl triggering for regular updates.

3. **Automated Error Handling Test:**
   - Simulates errors and validates the correctness of error notices.

4. **Automated Result Viewing Test:**
   - Automates the result viewing process to ensure quick and accurate retrieval.

## Contributing

Contributions are welcome! If you find issues or want to enhance the test suite, please create a pull request.

