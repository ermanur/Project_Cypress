import signIn from "../pageObject/signIn";
import editAccount from "../pageObject/editAccount";
import editAddress from "../pageObject/editAddress";

Cypress.Commands.add('signInCommands', () => {
    cy.fixture('editFixtures').then((data) => {
        signIn.clickSignIn()
        signIn.fillEmail(data.validemail)
        signIn.fillPassword(data.validpassword)
        signIn.clickSignInBtn()
        signIn.dropDown()
        signIn.myAccount()
})
})

//Edit Name
Cypress.Commands.add('editName', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditName()
        editAccount.firstName(data.firstname)
        editAccount.lastName(data.lastname)
        editAccount.clickSaveBtn()
    })
})

Cypress.Commands.add('editFirstName', () => {
        editAccount.clickEditName()
        editAccount.firstName('jon')
        editAccount.clickSaveBtn()
})

Cypress.Commands.add('editLastName', () => {
        editAccount.clickEditName()
        editAccount.lastName('snow')
        editAccount.clickSaveBtn()
})

Cypress.Commands.add('blankFirstName', () => {
        editAccount.clickEditName()
        editAccount.blankFirstName()
        editAccount.clickSaveBtn()
})

Cypress.Commands.add('blankLastName', () => {
        editAccount.clickEditName()
        editAccount.blankLastName()
        editAccount.clickSaveBtn()
})

Cypress.Commands.add('blankName', () => {
        editAccount.clickEditName()
        editAccount.blankFirstName()
        editAccount.blankLastName()
        editAccount.clickSaveBtn()
})

//Edit Email & Password
Cypress.Commands.add('editEmailPassword', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditName()
        editAccount.clickChangeEmail()
        editAccount.clickChangePassword()
        editAccount.fillNewEmail(data.newemail)
        editAccount.password(data.validpassword)
        editAccount.fillNewPassword(data.newpassword)
        editAccount.confirmNewPassword(data.newpassword)
        editAccount.clickSaveBtn()
    })
})

Cypress.Commands.add('invalidEmail', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditName()
        editAccount.clickChangeEmail()
        editAccount.clickChangePassword()
        editAccount.fillNewEmail(data.invalidemail)
        editAccount.password(data.validpassword)
        editAccount.fillNewPassword(data.newpassword)
        editAccount.confirmNewPassword(data.newpassword)
        editAccount.clickSaveBtn()
    })
})

Cypress.Commands.add('invalidPassword', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditName()
        editAccount.clickChangeEmail()
        editAccount.clickChangePassword()
        editAccount.fillNewEmail(data.newemail)
        editAccount.password(data.invalidpassword)
        editAccount.fillNewPassword(data.newpassword)
        editAccount.confirmNewPassword(data.newpassword)
        editAccount.clickSaveBtn()
    })
})

Cypress.Commands.add('invalidNewPassword', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditName()
        editAccount.clickChangeEmail()
        editAccount.clickChangePassword()
        editAccount.fillNewEmail(data.newemail)
        editAccount.password(data.validpassword)
        editAccount.fillNewPassword(data.invalidpassword)
        editAccount.confirmNewPassword(data.invalidpassword)
        editAccount.clickSaveBtn()
    })
})

Cypress.Commands.add('wrongConfirmPassword', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditName()
        editAccount.clickChangeEmail()
        editAccount.clickChangePassword()
        editAccount.fillNewEmail(data.newemail)
        editAccount.password(data.validpassword)
        editAccount.fillNewPassword(data.newpassword)
        editAccount.confirmNewPassword(data.invalidpassword)
        editAccount.clickSaveBtn()
    })
})

Cypress.Commands.add('blankEmail', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditName()
        editAccount.clickChangeEmail()
        editAccount.clickChangePassword()
        editAccount.blankNewEmail()
        editAccount.password(data.validpassword)
        editAccount.fillNewPassword(data.newpassword)
        editAccount.confirmNewPassword(data.newpassword)
        editAccount.clickSaveBtn()
    })
})

Cypress.Commands.add('blankPassword', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditName()
        editAccount.clickChangeEmail()
        editAccount.clickChangePassword()
        editAccount.fillNewEmail(data.newemail)
        editAccount.fillNewPassword(data.newpassword)
        editAccount.confirmNewPassword(data.newpassword)
        editAccount.clickSaveBtn()
    })
})

Cypress.Commands.add('blankNewPassword', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditName()
        editAccount.clickChangeEmail()
        editAccount.clickChangePassword()
        editAccount.fillNewEmail(data.newemail)
        editAccount.password(data.validpassword)
        editAccount.confirmNewPassword(data.newpassword)
        editAccount.clickSaveBtn()
    })
})

Cypress.Commands.add('blankConfirmPassword', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditName()
        editAccount.clickChangeEmail()
        editAccount.clickChangePassword()
        editAccount.fillNewEmail(data.newemail)
        editAccount.password(data.validpassword)
        editAccount.fillNewPassword(data.newpassword)
        editAccount.clickSaveBtn()
    })
})

Cypress.Commands.add('changePassword', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditPassword()
        editAccount.password(data.validpassword)
        editAccount.fillNewPassword(data.newpassword)
        editAccount.confirmNewPassword(data.newpassword)
        editAccount.clickSaveBtn()
    })
})

Cypress.Commands.add('blankPassword2', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditPassword()
        editAccount.blankPassword()
        editAccount.fillNewPassword(data.newpassword)
        editAccount.confirmNewPassword(data.newpassword)
        editAccount.clickSaveBtn()
    })
})

Cypress.Commands.add('blankNewPassword2', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditPassword()
        editAccount.password(data.validpassword)
        editAccount.blankNewPassword()
        editAccount.confirmNewPassword(data.newpassword)
        editAccount.clickSaveBtn()
    })
})

Cypress.Commands.add('blankConfirmPassword2', () => {
    cy.fixture('editFixtures').then((data) => {
        editAccount.clickEditPassword()
        editAccount.password(data.validpassword)
        editAccount.fillNewPassword(data.newpassword)
        editAccount.blankConfirmPassword()
        editAccount.clickSaveBtn()
    })
})

//Edit Address
Cypress.Commands.add('editAddress', () => {
    cy.fixture('editFixtures').then((data) => {
        editAddress.clickEditAddress()
        editAddress.fillCompany(data.company)
        editAddress.fillPhone(data.phone)
        editAddress.fillStreet(data.street)
        editAddress.fillCity(data.city)
        editAddress.fillState(data.state)
        editAddress.fillZip(data.zip)
        editAddress.selectCountry(data.country)
        editAddress.saveAddress()
    })
})

Cypress.Commands.add('blankCompany', () => {
    cy.fixture('editFixtures').then((data) => {
        editAddress.clickEditAddress()
        editAddress.blankCompany()
        editAddress.fillPhone(data.phone)
        editAddress.fillStreet(data.street)
        editAddress.fillCity(data.city)
        editAddress.fillState(data.state)
        editAddress.fillZip(data.zip)
        editAddress.selectCountry(data.country)
        editAddress.saveAddress()
    })
})

Cypress.Commands.add('blankPhone', () => {
    cy.fixture('editFixtures').then((data) => {
        editAddress.clickEditAddress()
        editAddress.fillCompany(data.company)
        editAddress.blankPhone(data.phone)
        editAddress.fillStreet(data.street)
        editAddress.fillCity(data.city)
        editAddress.fillState(data.state)
        editAddress.fillZip(data.zip)
        editAddress.selectCountry(data.country)
        editAddress.saveAddress()
    })
})

Cypress.Commands.add('blankStreet', () => {
    cy.fixture('editFixtures').then((data) => {
        editAddress.clickEditAddress()
        editAddress.fillCompany(data.company)
        editAddress.fillPhone(data.phone)
        editAddress.blankStreet()
        editAddress.fillCity(data.city)
        editAddress.fillState(data.state)
        editAddress.fillZip(data.zip)
        editAddress.selectCountry(data.country)
        editAddress.saveAddress()
    })
})

Cypress.Commands.add('blankCity', () => {
    cy.fixture('editFixtures').then((data) => {
        editAddress.clickEditAddress()
        editAddress.fillCompany(data.company)
        editAddress.fillPhone(data.phone)
        editAddress.fillStreet(data.street)
        editAddress.blankCity()
        editAddress.fillState(data.state)
        editAddress.fillZip(data.zip)
        editAddress.selectCountry(data.country)
        editAddress.saveAddress()
    })
})

Cypress.Commands.add('blankState', () => {
    cy.fixture('editFixtures').then((data) => {
        editAddress.clickEditAddress()
        editAddress.fillCompany(data.company)
        editAddress.fillPhone(data.phone)
        editAddress.fillStreet(data.street)
        editAddress.fillCity(data.city)
        editAddress.blankState()
        editAddress.fillZip(data.zip)
        editAddress.selectCountry(data.country)
        editAddress.saveAddress()
    })
})

Cypress.Commands.add('blankZip1', () => {
    cy.fixture('editFixtures').then((data) => {
        editAddress.clickEditAddress()
        editAddress.fillCompany(data.company)
        editAddress.fillPhone(data.phone)
        editAddress.fillStreet(data.street)
        editAddress.fillCity(data.city)
        editAddress.fillState(data.state)
        editAddress.blankZip()
        editAddress.selectCountry(data.country1)
        editAddress.saveAddress()
    })
})

Cypress.Commands.add('blankZip2', () => {
    cy.fixture('editFixtures').then((data) => {
        editAddress.clickEditAddress()
        editAddress.fillCompany(data.company)
        editAddress.fillPhone(data.phone)
        editAddress.fillStreet(data.street)
        editAddress.fillCity(data.city)
        editAddress.fillState(data.state)
        editAddress.blankZip()
        editAddress.selectCountry(data.country2)
        editAddress.saveAddress()
    })
})

Cypress.Commands.add('blankCountry', () => {
    cy.fixture('editFixtures').then((data) => {
        editAddress.clickEditAddress()
        editAddress.fillCompany(data.company)
        editAddress.fillPhone(data.phone)
        editAddress.fillStreet(data.street)
        editAddress.fillCity(data.city)
        editAddress.fillState(data.state)
        editAddress.fillZip(data.zip)
        editAddress.selectCountry('')
        editAddress.saveAddress()
    })
})

Cypress.Commands.add('invalidPhone', () => {
    cy.fixture('editFixtures').then((data) => {
        editAddress.clickEditAddress()
        editAddress.fillCompany(data.company)
        editAddress.fillPhone(data.invalidphone)
        editAddress.fillStreet(data.street)
        editAddress.fillCity(data.city)
        editAddress.fillState(data.state)
        editAddress.fillZip(data.zip)
        editAddress.selectCountry(data.country1)
        editAddress.saveAddress()
    })
})