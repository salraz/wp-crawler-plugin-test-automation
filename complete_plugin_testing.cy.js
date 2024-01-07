describe('Login to Admin Panel', () => {
  it('Installs and activates the plugin successfully', () => {
    cy.visit('http://digidots.local/wp-admin/index.php');

    // WP Admin dashboard login
    cy.get('#user_login').type('dev-email@wpengine.local');
    cy.get('#user_pass').type('Salman12!');
    cy.get('#wp-submit').click();

    // Trigger a manual crawl
    cy.get('#menu-tools > .wp-has-submenu > .wp-menu-image').click();
    cy.get('#menu-tools > .wp-submenu > :nth-child(8) > a').click();

    // Validate if the plugin appears in the Tools section
    cy.get('h1').should('contain', 'WP Crawler admn panel');
    cy.get('#wpcrawler-crawl-button').click();

    // Validate if the crawl started immediately
    cy.get('#wpcrawler-cron-crawl-status').should('contain', 'Automatic crawls are scheduled.');

    // Wait for an hour and check if automatic crawl occurred
    cy.wait(600); // 1 hour in milliseconds

    // Validate if the automatic crawl occurred
    cy.get('#wpcrawler-cron-crawl-status').should('contain', 'Automatic crawls are scheduled. Next one ');

  });
});



