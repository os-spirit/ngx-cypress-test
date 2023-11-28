describe ('Task 1', () => {

    it('Checking slider text' , () => {

        cy.visit('http://localhost:4200/pages/layout/stepper');

        cy.get('[orientation="horizontal"] h3').as('stepperSlider');
        cy.get('[orientation="horizontal"] button:last-child').as('nextButton');

        cy.get('@stepperSlider').should('have.text','Step content #1');
        cy.get('@nextButton').click();;
       
        cy.get('@stepperSlider').should('have.text','Step content #2');
        cy.get('@nextButton').click();

        cy.get('@stepperSlider').should('have.text','Step content #3');
        cy.get('@nextButton').click();

        cy.get('@stepperSlider').should('have.text','Step content #4');
           
    })

});