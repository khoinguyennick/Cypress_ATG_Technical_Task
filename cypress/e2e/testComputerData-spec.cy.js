import 'cypress-xpath';
import pageComputerDatabase from "../pages/pageComputerDatabase";
import pageAddNewComputer from "../pages/pageAddNewComputer";

describe('[smoke] It Should allow users to add new computers to the database for searching at a later date', () => {
  // Before each test case, visit the specified URL
  beforeEach(() => {
    cy.visit('http://computer-database.gatling.io/computers');
  });

  // Test case 1
  it('There should be a link to the new section that allows users to add computers to the database',
    () => {
      cy.log('assert if the "add new computer exist"');
      pageComputerDatabase.elements.btnAddNewComputer()
        .should('have.text', 'Add a new computer');
    });

  // Test case 2
  it('It should be possible to open the new section', () => {
    pageComputerDatabase.clickAddNewComputer();
    cy.log('assert heading title')
    pageAddNewComputer.elements.headingTitle()
      .should('have.text', 'Add a New Computer"');
  });

  // Test case 3
  it(' It should have four new fields and two buttons in the new section', () => {
    pageComputerDatabase.clickAddNewComputer();
    cy.log('assert computer name lable');
    pageAddNewComputer.elements.lblComputerName()
      .should('have.text', 'Computer name');

    cy.log('assert computer input field')
    pageAddNewComputer.elements.txtComputerName()
      .should('have.attr', 'type', 'text');

    cy.log('assert computer name lable');
    pageAddNewComputer.elements.lblIntroducedDate()
      .should('have.text', 'Introduced');
    cy.log('assert computer input field');
    pageAddNewComputer.elements.txtIntroducedDate()
      .should('have.attr', 'type', 'text');


    cy.log('assert Discontinued Date lable');
    pageAddNewComputer.elements.lblDiscontinuedDate()
      .should('have.text', 'Discontinued');
    cy.log('assert Discontinued Date input field');
    pageAddNewComputer.elements.txtDiscontinuedDate()
      .should('have.attr', 'type', 'text');

    cy.log('assert Manufacturer lable');
    pageAddNewComputer.elements.lblManufacturer()
      .should('have.text', 'Company');
    cy.log('assert Introduced Date input field');
    pageAddNewComputer.elements.txtManufacturer
      .should('have.attr', 'type', 'text');

    cy.log('assert Add Computer button');
    pageAddNewComputer.elements.btnAddComputer()
      .should('have.attr', 'value', 'Create this computer');

    cy.log('assert cancel button');
    pageAddNewComputer.elements.btnCancel()
      .should('have.text', 'Cancel');

  });

  // Test case 4
  it(' It should not allow new computers to be added unless all fields are populated', () => {
    pageComputerDatabase.clickAddNewComputer();
    cy.log('Input computer name: saigoi27')
    pageAddNewComputer.inputComputerName("saigoi27");

    pageAddNewComputer.clickAddComputer();
    cy.log('assert heading title')
    pageAddNewComputer.elements.headingTitle()
      .should('have.text', 'Add a New Computer"');
  });

  // Test case 5
  it(' It should not allow new computers to be added unless all fields are populated', () => {
    pageComputerDatabase.clickAddNewComputer();
    cy.log('Input computer name: saigoi27')
    pageAddNewComputer.inputComputerName("Cancel-12");
    cy.log('Input Introduced Date: "2023/11/27"');
    pageAddNewComputer.inputIntroducedDate('2023/11/27');
    cy.log('Input Discontinued Date: "2024/11/01"');
    pageAddNewComputer.inputDiscontinuedDate('2024/11/01');
    cy.log('Input Manufacturer: "Dell"');
    pageAddNewComputer.inputManufacturer('Dell');

    cy.log('Click cancel button');
    pageAddNewComputer.clickCancel();
    cy.log('assert heading title')
    pageComputerDatabase.elements.btnAddNewComputer()
      .should('have.text', 'Add a new computer');
  });
});