import { clientData } from "../fixtures/client"

export class adressPage {

    ChooseOldAdress(){
        cy.get('input[id="old_housing.address"]')
          .type(clientData.oldAdress)
        cy.get('p')
          .contains(clientData.oldAdress)
          .click()
    }

    chooseNewAdress(){
        cy.get('input[id="housing.address"]')
          .type(clientData.newAdress)

        cy.get('p')
          .contains(clientData.newAdress)
          .click()

    }

}