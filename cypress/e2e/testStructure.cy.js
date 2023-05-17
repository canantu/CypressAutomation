/// <reference types="cypress" />

describe('Context: my first tests', ()=> {

    before(() => {
        // runs once before all test cases in this describe block, like BeforeClass in TestNG
    })

    beforeEach(() => {
        // runs before each test case, like BeforeMethod in TestNG
        cy.clearCookies();
    })

    after(() => {
        // runs once after all test cases, similar to AfterClass 
    })

    afterEach(() => {
        // similar to AfterMethod
    })

    it('opening a web application', () => {
        cy.visit('registration_form');
    
    })

})