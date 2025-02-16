import editAccount from "../../support/pageObject/editAccount"

describe ('Magento Edit Account', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.signInCommands()
    })

    //Edit Name
    it('Edit Account Name Success', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.editName()
        cy.get(editAccount.successEditName).should('contain', data.editsuccess)
        })
    })
    it('Edit Account Success - Firstname', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.editFirstName()
        cy.get(editAccount.successEditName).should('contain', data.editsuccess)
        })
    })
    it('Edit Account Success - Lastname', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.editLastName()
        cy.get(editAccount.successEditName).should('contain', data.editsuccess)
        })
    })
    it('Edit Account Failed - Blank Firstname', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.blankFirstName()
        cy.get(editAccount.requiredFName).should('contain', data.required)
        })
    })
    it('Edit Account Failed - Blank Lastname', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.blankLastName()
        cy.get(editAccount.requiredLName).should('contain',data.required)
        })
    })
    it('Edit Account Failed - Blank Name', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.blankName()
        cy.get(editAccount.requiredFName).should('contain',data.required)
        cy.get(editAccount.requiredLName).should('contain',data.required)
        })
    })

    //Edit Email & Password
    it('Edit Email Password Success', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.editEmailPassword()
        cy.get(editAccount.successEditName).should('contain', data.editsuccess)
        })
    })
    it('Edit Email Password Failed - Invalid Email', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.invalidEmail()
        cy.get(editAccount.requiredEmail).should('contain', data.errorinvalidemail)
        })
    })
    it('Edit Email Password Failed - Invalid Password', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.invalidPassword()
        cy.get(editAccount.errorInvalidPassword).should('contain', data.errorcurrentpassword)
        })
    })
    it('Edit Email Password Failed - Invalid New Password', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.invalidNewPassword()
        cy.get(editAccount.requiredNewPassword).should('contain', data.errornewpassword)
        })
    })
    it('Edit Email Password Failed - Invalid Confirm Password', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.wrongConfirmPassword()
        cy.get(editAccount.requiredConfirmPass).should('contain', data.errorconfirmpassword)
        })
    })
    it('Edit Email Password Failed - Blank Email', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.blankEmail()
        cy.get(editAccount.requiredEmail).should('contain', data.required)
        })
    })
    it('Edit Email Password Failed - Blank Password', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.blankPassword()
        cy.get(editAccount.requiredPassword).should('contain', data.required)
        })
    })
    it('Edit Email Password Failed - Blank New Password', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.blankNewPassword()
        cy.get(editAccount.requiredNewPassword).should('contain', data.required)
        })
    })
    it('Edit Email Password Failed - Blank Confirm Password', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.blankConfirmPassword()
        cy.get(editAccount.requiredConfirmPass).should('contain', data.required)
        })
    })
    //Change Password Button
    it('Edit Password Success', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.changePassword()
        cy.get(editAccount.successEditName).should('contain', data.editsuccess)
        })
    })
    it('Edit Password Failed - Blank Password', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.blankPassword2()
        cy.get(editAccount.requiredPassword).should('contain', data.required)
        })
    })
    it('Edit Password Failed - Blank New Password', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.blankNewPassword2()
        cy.get(editAccount.requiredNewPassword).should('contain', data.required)
        })
    })
    it('Edit Password Failed - Blank Confirm Password', () => {
        cy.fixture('editFixtures').then((data) => {
        cy.blankConfirmPassword2()
        cy.get(editAccount.requiredConfirmPass).should('contain', data.required)
        })
    })
}) 