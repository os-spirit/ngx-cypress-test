describe('Task 2',() => {

    it('Check modal window elements',() => {

        cy.visit('http://localhost:4200/pages/modal-overlays/dialog');

        cy.get('.result-from-dialog button').click();
        
        cy.get('ngx-dialog-name-prompt.ng-star-inserted').should('be.visible');
        cy.get('ngx-dialog-name-prompt nb-card-header').should('have.text', 'Enter your name');
        cy.get('ngx-dialog-name-prompt [placeholder = "Name"]').should('be.visible');
        cy.get('ngx-dialog-name-prompt button:last-child').should('have.text','Submit');
        cy.get('ngx-dialog-name-prompt button:first-child').should('have.text','Cancel');

    })

})