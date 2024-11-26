const { adressPage } = require("../Pages/adressPage")
const { clientInfoPage } = require("../Pages/clientInfoPage")

describe('QA automation technical test', () => {


  it('start the redirection process', () => {
    cy.clearCookies()
    cy.visit('https://app.papernest.com/onboarding?anonymous&anonymousId=test&id_text=1&destination=newspaper')
    cy.title().should('eq', 'Redirection de courrier | papernest')
    cy.get('button').contains('Commencer').click()
  })

  it('Complete the arrival date field', ()=>{
    cy.get('input[id="poste-subscription.begin_date"]').click()
    cy.get('span').contains('30').click()
  })

  it('Enter old and new adresses', ()=>{
    const adresspage = new adressPage
    adresspage.ChooseOldAdress()
    adresspage.chooseNewAdress()
    cy.get('#button_next').click()
  })

  it('Offer page / “La Poste”  offers are displayed',()=>{
    cy.get('#offer_poste_6').click()
  })

  it('Complete clients infos page',()=>{
    const clientInfo = new clientInfoPage
    clientInfo.fillClientInfo()
  })


  it('Select “Je reçois le code par mail”',()=>{
    cy.get('#text_post_office').click()
    cy.wait(1000)
    cy.get('#button_next').click()
  })

  it('summary of Client informations and final page',()=>{
    cy.wait(1000)
    cy.get('#button_next_summary').click()
    cy.get('.title').contains("Il ne vous reste plus qu'à payer la redirection").should('be.visible')
  })
})  