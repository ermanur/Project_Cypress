class signIn {
    //locator
    signin = '.panel > .header > .authorization-link > a'
    email = '#email'
    password = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    signinBtn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    dropdown = ':nth-child(2) > .customer-welcome > .customer-name > .action'
    myaccount = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'

    //actions
    clickSignIn(){
        cy.get(this.signin).click()
    }
    fillEmail(validemail){
        cy.get(this.email).clear().type(validemail)
    }
    fillPassword(validpassword){
        cy.get(this.password).clear().type(validpassword)
    }
    clickSignInBtn(){
        cy.get(this.signinBtn).click()
    }
    dropDown(){
        cy.get(this.dropdown).click()
    }
    myAccount(){
        cy.get(this.myaccount).click()
    }
}

module.exports = new signIn()