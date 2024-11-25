describe('QA automation technical test', () => {


  it('passes', () => {
    cy.visit('https://app.papernest.com/onboarding?anonymous&anonymousId=test&id_text=1&destination=newspaper')
  })
})