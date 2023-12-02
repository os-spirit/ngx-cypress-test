/// <reference types="cypress" />

import { fn } from "@angular/compiler/src/output/output_ast";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


  
  Cypress.Commands.add("addUser", (user: User) => {
    
    cy.get('.nb-plus:first-child').click();
        
    cy.get('[ng-reflect-name="id"]').type(user.id);
    cy.get('[ng-reflect-name="firstName"]').type(user.firstName);
    cy.get('[ng-reflect-name="lastName"]').type(user.lastName);
    cy.get('[ng-reflect-name="username"]').type(user.username);
    cy.get('[ng-reflect-name="email"]').type(user.email);
    cy.get('[ng-reflect-name="age"]').type(user.age);
        
    cy.get('.nb-checkmark:first-child').click();
        
  });