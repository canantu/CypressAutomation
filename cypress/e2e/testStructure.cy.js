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

    it.skip('opening a web application', () => {
        cy.visit('registration_form');
    
    })

    xit('Test 2', () =>{

        expect(false).to.equal(false);
    })

    it('Test 3', () =>{

        expect(false).not.to.equal(true);
    })

    it('Test 4', () =>{

        expect(5).to.equal(5);
    })

    it.only('Test 5', () =>{

        expect(true).to.equal('5'==5);
    })

})