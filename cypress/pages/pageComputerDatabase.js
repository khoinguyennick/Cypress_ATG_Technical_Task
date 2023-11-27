class pageComputerDatabase {


    elements = {
        btnAddNewComputer: () => cy.xpath('//a[contains(@id,"add")]'),
        loginBtn: () => cy.get('#login - btn')
    }


    clickAddNewComputer() {
        this.elements.btnAddNewComputer().click();
    }

}


module.exports = new pageComputerDatabase();

import 'cypress-xpath'