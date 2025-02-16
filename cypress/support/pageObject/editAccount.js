class editAccount {
    //locator
    editName = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
    firstname = '#firstname'
    lastname = '#lastname'
    saveAccountBtn = '#form-validate > .actions-toolbar > div.primary > .action'
    successEditName = '.message-success' //validasi
    changeEmail = '#change-email'
    changePassword = '#change-password'
    newEmail = '#email'
    currentPassword = '#current-password'
    newPassword = '#password'
    confirmNewPass = '#password-confirmation'
    editPassword = '.change-password'
    requiredFName = '#firstname-error'
    requiredLName = '#lastname-error'
    requiredEmail = '#email-error'
    requiredPassword = '#current-password-error'
    requiredNewPassword = '#password-error'
    requiredConfirmPass = '#password-confirmation-error'
    errorInvalidPassword = '.message-error'

    //actions

    //Edit Name
    clickEditName(){
        cy.get(this.editName).click()
    }
    firstName(firstname){
        cy.get(this.firstname).clear().type(firstname)
    }
    lastName(lastname){
        cy.get(this.lastname).clear().type(lastname)
    }
    clickSaveBtn(){
        cy.get(this.saveAccountBtn).click()
    }
    blankFirstName(){
        cy.get(this.firstname).clear()
    }
    blankLastName(){
        cy.get(this.lastname).clear()
    }

    //Edit Email & Password
    clickChangeEmail(){
        cy.get(this.changeEmail).click()
    }
    fillNewEmail(newemail){
        cy.get(this.newEmail).clear().type(newemail)
    }
    password(validpassword){
        cy.get(this.currentPassword).clear().type(validpassword)
    }
    blankNewEmail(){
        cy.get(this.newEmail).clear()
    }
    blankPassword(){
        cy.get(this.currentPassword).clear()
    }

    clickChangePassword(){
        cy.get(this.changePassword).click()
    }
    fillNewPassword(newpassword){
        cy.get(this.newPassword).type(newpassword)
    }
    confirmNewPassword(newpassword){
        cy.get(this.confirmNewPass).type(newpassword)
    }
    blankNewPassword(){
        cy.get(this.newPassword).clear()
    }
    blankConfirmPassword(){
        cy.get(this.confirmNewPass).clear()
    }

    clickEditPassword(){
        cy.get(this.editPassword).click()
    }
}

module.exports = new editAccount()