import editAddress from "../../support/pageObject/editAddress"

describe ('Magento Edit Account', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.signInCommands()
    })

    it('Edit Address Success', () => {
        cy.fixture('editFixtures').then((data) => {
            cy.editAddress()
            cy.get(editAddress.successEditAddress).should('contain', data.addresssuccess)
        })
    })
    it('Edit Address Success - Blank Company', () => {
        cy.fixture('editFixtures').then((data) => {
            cy.blankCompany()
            cy.get(editAddress.successEditAddress).should('contain', data.addresssuccess)
        })
    })
    it('Edit Address Success - Blank State', () => {
        cy.fixture('editFixtures').then((data) => {
            cy.blankState()
            cy.get(editAddress.successEditAddress).should('contain', data.addresssuccess)
        })
    })
    it('Edit Address Success - Blank Zip', () => {  //success if the country is "united kingdom"
        cy.fixture('editFixtures').then((data) => {
            cy.blankZip1()
            cy.get(editAddress.successEditAddress).should('contain', data.addresssuccess)
        })
    })
    it('Edit Address Failed - Blank Zip', () => {  //failed if other than “united kingdom” countries
        cy.fixture('editFixtures').then((data) => {
            cy.blankZip2()
            cy.get(editAddress.requiredZip).should('contain', data.required)
        })
    })
    it('Edit Address Failed - Blank Phone', () => {
        cy.fixture('editFixtures').then((data) => {
            cy.blankPhone()
            cy.get(editAddress.requiredPhone).should('contain', data.required)
        })
    })
    it('Edit Address Failed - Blank Street', () => {
        cy.fixture('editFixtures').then((data) => {
            cy.blankStreet()
            cy.get(editAddress.requiredStreet).should('contain', data.required)
        })
    })
    it('Edit Address Failed - Blank City', () => {
        cy.fixture('editFixtures').then((data) => {
            cy.blankCity()
            cy.get(editAddress.requiredCity).should('contain', data.required)
        })
    })
    it('Edit Address Failed - Blank Country', () => {
        cy.fixture('editFixtures').then((data) => {
            cy.blankCountry()
            cy.get(editAddress.requiredCountry).should('contain', data.errorcountry)
        })
    })
    it.only('Edit Address Failed - Invalid Phone', () => {  //supposed to failed
        cy.fixture('editFixtures').then((data) => {
            cy.invalidPhone()
            cy.get(editAddress.requiredPhone).should('contain', data.required)
        })
    })
})