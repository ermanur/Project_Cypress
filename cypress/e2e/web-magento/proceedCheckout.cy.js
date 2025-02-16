import detailPage from "../../support/element-pages/detailPage"
import Shipping from "../../support/element-pages/checkout-shippingPage"
import Review_Payments from "../../support/element-pages/checkout-reviewPage"

describe('proceed to checkout', () => {
  
  beforeEach(() => {
    // Visit item detail page
        cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
          .wait(2000)

    // Pre-conditions - Already add items to cart & Click Proceed to Checkout
        cy.AddToCart()
          .get(detailPage.proceedtocheckout_btn).should('have.text', 'Proceed to Checkout')
          .get(detailPage.proceedtocheckout_btn).dblclick({ multiple: false })
          .url().should('include', '/checkout/#shipping')
          .wait(3000)
  })

  it('proceed to checkout - positive (doesnt have account)', () => {
        cy.InputFieldsShipping()
          .get(Shipping.ship_flatrate).click()
          .get(Shipping.next_btn).click()
  })

  it('proceed to checkout - positive (have account)', () => {
        cy.get(Shipping.emailaddress).type('lalamariella@gmail.com')
    // Validate message have an account
        .get(Shipping.haveaccount_msg).should('be.visible')
          .get(Shipping.haveaccount_msg).should('have.text', 'You can create an account after checkout.You already have an account with us. Sign in or continue as guest.')
          .get(Shipping.password).type('Lalamariella123')
    // Validate account appearing 
          .get(Shipping.haveaccount_login_btn).click()
          .get(Shipping.validate_newaddress_btn).should('be.visible')
          .get(Shipping.next_btn).click()
  })

  it('proceed to checkout - positive (flat rate)', () => {
        cy.InputFieldsShipping()
    // Pick Flat Rate Shipping Method
          .get(Shipping.ship_flatrate).click()
          .get(Shipping.next_btn).click()
          .wait(5000)
    // Validate Shipping Method - Flat Rate on Summary
          .get(Review_Payments.validate_shipping).contains('Flat Rate')
    // Click Place Order
          .get(Review_Payments.placeorder_btn).click()
          .url().should('include','/checkout/onepage/success/')
          .get(Review_Payments.placeorder_success_msg)
          .should('have.text', 'Thank you for your purchase!')
  })

  it('proceed to checkout - positive (best way)', () => {
        cy.InputFieldsShipping()
    // Pick Best Way Shipping Method
          .get(Shipping.ship_bestway).click()
          .get(Shipping.next_btn).click()
          .wait(5000)
    // Validate Shipping Method - Best Way on Summary
          .get(Review_Payments.validate_shipping).contains('Best Way')
    // Click Place Order
          .get(Review_Payments.placeorder_btn).click()
          .url().should('include','/checkout/onepage/success/')
          .get(Review_Payments.placeorder_success_msg).should('have.text', 'Thank you for your purchase!')
  })

  it('proceed to checkout - negative (invalid discount code)', () => {
        cy.InputFieldsShipping()
    // Pick Shipping Method
          .get(Shipping.ship_flatrate).click()
          .get(Shipping.next_btn).click()
          .wait(5000)

    // Apply Invalid Discount Code
          .get(Review_Payments.applydiscountcode_btn).click()
          .get(Review_Payments.discountcode).type('DISC50')
          .get(Review_Payments.applydiscount_btn).click()
    
    // Validate error message
          .get(Review_Payments.validate_invaliddiscount_alert).should('be.visible')
          .get(Review_Payments.validate_invaliddiscount_msg).should('have.text', "The coupon code isn't valid. Verify the code and try again.")
  })

  it('proceed to checkout - negative (empty email address)', () => {
        cy.InputFieldsShipping()
    // Pick Shipping Method
          .get(Shipping.ship_flatrate).click()

    // Clear field email address
          .get(Shipping.emailaddress).clear()
    // Click Next to trigger
          .get(Shipping.next_btn).click()
          .get(Shipping.validate_emptyemail_msg)
          .should('be.visible')
          .and('have.text', 'This is a required field.')
  })

  it('proceed to checkout - negative (empty fields)', () => { 
        cy.InputFieldsShipping()
    // Pick Shipping Method
          .get(Shipping.ship_flatrate).click()

    // Clear fields & trigger next button to validate error message
          .get(Shipping.firstname).clear()
          .get(Shipping.next_btn).click()
          .get(Shipping.validate_emptyfirstname_msg)
          .should('be.visible')
          .contains('This is a required field.')

          .get(Shipping.lastname).clear()
          .get(Shipping.next_btn).click()
          .get(Shipping.validate_emptylastname_msg)
          .should('be.visible')
          .contains('This is a required field.')

          .get(Shipping.streetaddress1).clear()
          .get(Shipping.next_btn).click()
          .get(Shipping.validate_emptystreetaddress_msg)
          .should('be.visible')
          .contains('This is a required field.')

          .get(Shipping.city).clear()
          .get(Shipping.next_btn).click()
          .get(Shipping.validate_emptycity_msg)
          .should('be.visible')
          .contains('This is a required field.')

          .get(Shipping.postcode).clear()
          .get(Shipping.next_btn).click()
          .get(Shipping.validate_emptypostcode_msg)
          .should('be.visible')
          .contains('This is a required field.')

          .get(Shipping.phonenumber).clear()
          .get(Shipping.next_btn).click()
          .get(Shipping.validate_emptyphonenumber_msg)
          .should('be.visible')
          .contains('This is a required field.')

          .get(Shipping.state).select('Please select a region, state or province.')
          .get(Shipping.next_btn).click()
          .get(Shipping.validate_emptystate_msg)
          .should('be.visible')
          .contains('This is a required field.')

          .get(Shipping.country).select('')
          .get(Shipping.next_btn).click()
          .get(Shipping.validate_emptycountry_msg)
          .should('be.visible')
          .contains('This is a required field.')
  })

  it('proceed to checkout - negative (invalid email)', () => {
        cy.get(Shipping.emailaddress).type('lala@')
          .get(Shipping.next_btn).click()

          .get(Shipping.validate_emptyemail_msg)
          .should('be.visible')
          .and('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
  })

  it('proceed to checkout - negative (invalid postal code)', () => {
    // Input with letter
        cy.get(Shipping.postcode).type('letter input')
          .get(Shipping.next_btn).click()

          .get(Shipping.validate_invalidpostalcode_msg)
          .should('be.visible')
          .and('have.text', 'Provided Zip/Postal Code seems to be invalid. Example: 12345-6789; 12345. If you believe it is the right one you can ignore this notice.')
        
          .get(Shipping.postcode).clear()
    // Input with invalid numbers
        cy.get(Shipping.postcode).type('38213891293')
          .get(Shipping.next_btn).click()
    
    // Validate error message
          .get(Shipping.validate_invalidpostalcode_msg).should('be.visible')
          .and('have.text', 'Provided Zip/Postal Code seems to be invalid. Example: 12345-6789; 12345. If you believe it is the right one you can ignore this notice.')
  })

  it('proceed to checkout - negative (empty shipping method)', () => {
      cy.InputFieldsShipping()
        .get(Shipping.next_btn).click()

    // Validate error message
        .get(Shipping.validate_emptyship_alert).should('be.visible')
        .get(Shipping.validate_emptyship_msg).should('have.text', 'The shipping method is missing. Select the shipping method and try again.')
  })

  it('proceed to checkout - negative (invalid input using "-")', () => {
        cy.InputFieldsShipping()
          .PickShippingMethod()
          .InputStripFieldsShipping()
    // Validate section Shipping 
          .get(Shipping.next_btn).click()
          .wait(5000)
          .get(Shipping.shipping_section).should('be.visible')
  })

})