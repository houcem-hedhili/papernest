import { clientData } from "../fixtures/client"

const emailinput = 'input[id="user.email"]'
const phonenumberinput = 'input[id="user.phone_number"]'
const firstnameinput = 'input[id="user.first_name"]'
const lastnameinput = 'input[id="user.last_name"]'
const nextbutton = '#button_next'
export class clientInfoPage {

    fillClientInfo(){
        cy.get(emailinput)
          .type(clientData.email)

        cy.intercept('POST', '/api/utils/email/')
          .as('EmailValid');
        cy.wait("@EmailValid")
          .its("response.statusCode")
          .should("eq", 200)

        cy.get(phonenumberinput)
          .type(clientData.phone)

        cy.get('div')
          .contains('M.')
          .click()

        cy.get(firstnameinput)
          .type(clientData.firstname)

        cy.get(lastnameinput)
          .type(clientData.lastname)
          
        cy.wait(1000)
        cy.get(nextbutton)
          .click()
    }
}