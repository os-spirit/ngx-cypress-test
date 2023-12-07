describe('CY_Homework_2', () =>{

    it('Check user AUTH', () => { 

        cy.visit('http://localhost:4200/auth/login');

        cy.get('#input-email').type('test@gmail.com');
        cy.get('#input-password').type('123456');
        cy.get('span.custom-checkbox ').click();
        cy.get('button').contains(' Log In ').click();

        cy.url().should('eq', 'http://localhost:4200/pages');

    })

})