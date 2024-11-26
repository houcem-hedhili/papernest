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
    cy.get('input[id="old_housing.address"]').type("16 Rue Lecourbe 75015 Paris")
    cy.get('p').contains('16 Rue Lecourbe 75015 Paris').click()
    cy.get('input[id="housing.address"]').type("20 Rue Lecourbe 75015 Paris")
    cy.get('p').contains('20 Rue Lecourbe 75015 Paris').click()
    cy.get('#button_next').click()
  })

  it('Offer page / “La Poste”  offers are displayed',()=>{
    cy.get('#offer_poste_6').click()
  })
})