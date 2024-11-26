import { clientData } from "../fixtures/client"

const oldadressinput = 'input[id="old_housing.address"]'
const newadressinput = 'input[id="housing.address"]'
export class adressPage {

    ChooseOldAdress(){
        cy.get(oldadressinput)
          .type(clientData.oldAdress)
        cy.get('p')
          .contains(clientData.oldAdress)
          .click()
    }

    chooseNewAdress(){
        cy.get(newadressinput)
          .type(clientData.newAdress)

        cy.get('p')
          .contains(clientData.newAdress)
          .click()

    }

}