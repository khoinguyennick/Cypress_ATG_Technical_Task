class pageAddNewComputer {

    xpath_elements = {
        titleHeading: '//section[@id="main"]/h1',
        lableComputer: '//label[text()="Computer name"]',
        lableIntroducedDate: '//label[text()="Introduced"]',
        lableDiscontinuedDate: '//label[text()="Discontinued"]',
        lableManufacturer: '//label[text()="Company"]',
        buttonAddComputer: '//input[@value="Create this computer"]',
        buttonCancel: '//a[text()="Cancel"]'
    }
    elements = {
        headingTitle: () =>
            cy.xpath(this.xpath_elements.titleHeading),
        lblComputerName: () =>
            cy.xpath(this.xpath_elements.lableComputer),
        txtComputerName: () =>
            cy.xpath(this.xpath_elements.lableComputer + '/../div/input'),
        lblIntroducedDate: () =>
            cy.xpath(this.xpath_elements.lableIntroducedDate),
        txtIntroducedDate: () =>
            cy.xpath(this.xpath_elements.lableIntroducedDate + '/../div/input'),
        lblDiscontinuedDate: () =>
            cy.xpath(this.xpath_elements.lableDiscontinuedDate),
        txtDiscontinuedDate: () =>
            cy.xpath(this.xpath_elements.lableDiscontinuedDate + '/../div/input'),
        lblManufacturer: () =>
            cy.xpath(this.xpath_elements.lableManufacturer),
        txtManufacturer: () =>
            cy.xpath(this.xpath_elements.lableManufacturer + '/../div/input'),
        btnAddComputer: () =>
            cy.xpath(this.xpath_elements.buttonAddComputer),
        btnCancel: () =>
            cy.xpath(this.xpath_elements.buttonCancel),
    }


    clickAddComputer() {
        this.elements.btnAddComputer().click();
    }
    
    clickCancel() {
        this.elements.btnCancel().click();
    }

    inputComputerName(computerName) {
        this.elements.txtComputerName().type(computerName);
    }

    inputIntroducedDate(introducedDate) {
        this.elements.txtIntroducedDate().type(introducedDate);
    }

    inputDiscontinuedDate(discontinuedDate) {
        this.elements.txtDiscontinuedDate().type(discontinuedDate);
    }
    
    inputManufacturer(manufacturer){
        this.elements.txtManufacturer().type(manufacturer);
    }
}


module.exports = new pageAddNewComputer();


import 'cypress-xpath'