class editAddress {
    //locator
    editAddress = '.box-billing-address > .box-actions > .action > span'
    editShipAddress = '.box-shipping-address > .box-actions > .action > span'
    company = '#company'
    phoneNumber = '#telephone'
    streetAddress = '#street_1'
    city = '#city'
    state = '#region'
    zip = '#zip'
    country = '#country'
    saveAddressBtn = '#form-validate > .actions-toolbar > div.primary > .action'
    successEditAddress = '.message-success'
    requiredPhone = '#telephone-error'
    requiredStreet = '#street_1-error'
    requiredCity = '#city-error'
    requiredZip = '#zip-error'
    requiredCountry = '#country-error'

    //actions
    clickEditAddress(){
        cy.get(this.editAddress).click()
    }
    fillCompany(company){
        cy.get(this.company).clear().type(company)
    }
    fillPhone(phone){
        cy.get(this.phoneNumber).clear().type(phone)
    }
    fillStreet(street){
        cy.get(this.streetAddress).clear().type(street)
    }
    fillCity(city){
        cy.get(this.city).clear().type(city)
    }
    fillState(state){
        cy.get(this.state).clear().type(state)
    }
    fillZip(zip){
        cy.get(this.zip).clear().type(zip)
    }
    selectCountry(country){
        cy.get(this.country).select(country)
    }
    saveAddress(){
        cy.get(this.saveAddressBtn).click()
    }
    blankCompany(){
        cy.get(this.company).clear()
    }
    blankPhone(){
        cy.get(this.phoneNumber).clear()
    }
    blankStreet(){
        cy.get(this.streetAddress).clear()
    }
    blankCity(){
        cy.get(this.city).clear()
    }
    blankState(){
        cy.get(this.state).clear()
    }
    blankZip(){
        cy.get(this.zip).clear()
    }
}

module.exports = new editAddress()