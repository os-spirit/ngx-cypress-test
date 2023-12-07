// import "./support/commands.ts";

describe ('HM_2_Task_1', () => {

   
    it("Add user check + custom command", () => {
        
        const user = {
          id: "99",
          firstName: "Test",
          lastName: "Man",
          username: "osspirit",
          email: "osspirit@gmail.com",
          age: "22",
        };

        cy.visit('http://localhost:4200/pages/tables/smart-table');
       
        cy.addUser(user); // Custom command - Create new user by data in the 'user' object
        
        // Check user was added 
        cy.get('tbody > :nth-child(1) > :nth-child(2)').as('newUserIdField');
        cy.get('@newUserIdField').should('have.text', '99');
        cy.get('tbody > :nth-child(1) > :nth-child(6)').as('newUserEmailField');
        cy.get('@newUserEmailField').should('have.text', 'osspirit@gmail.com');
        
        // Edit function
        cy.get(':nth-child(1) > .ng2-smart-actions > ng2-st-tbody-edit-delete > .ng2-smart-action-edit-edit > .nb-edit').as('editButton');
        cy.get('@editButton').click();

        // Change user info (name)
        cy.get(':nth-child(3) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control')
        .clear().type('Super');
                
        cy.get('.nb-checkmark').as('checkMarkButton');
        cy.get('@checkMarkButton').click();


         // Check the name was changet   
        cy.get('.ng2-smart-row > :nth-child(3)')
        .should('have.text', 'Super');
                
      });

    });

    