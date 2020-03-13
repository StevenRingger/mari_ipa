/* eslint-disable no-undef */
context("AnamneseList is displayed in CustomerPage", () => {

  describe('CustomerPage', () => {
    it('table is displayed, hover works, onclick redirected to anamnese page', () => {
      cy.visit('/customer/1')
      cy.url().should('eq', 'http://localhost:3000/customer/1')
      expect(cy.get('tbody > :nth-child(1) > :nth-child(2)').should("have.text", "11.02.2020"))
      cy.get('tbody > :nth-child(1) > :nth-child(2)').trigger("mouseover")
      cy.get(':nth-child(1) > :nth-child(2) > .view-icon > .svg-inline--fa').should("be.visible")
      cy.get('tbody > :nth-child(1) > :nth-child(2)').click()
      cy.url().should('eq', 'http://localhost:3000/anamnese/1')
    })

    it('Api request error, toast gets displayed', () => {
      cy.server()
      cy.route({ url: '/anamnese', status: 500, response: {} })
      cy.visit('/customer/1')
      cy.url().should('eq', 'http://localhost:3000/customer/1')
      cy.get('div.fade.toast').should('have.css', 'opacity', '1')
      expect(cy.get('.toast-header').should("have.text", "Daten konnten nicht geladen werden×Close"))
      cy.wait(5000)
      cy.get('div.fade.toast').should('have.css', 'opacity', '0')
    })

    it('Button exist, onclick redirect to new anamnese page', () => {
      cy.visit('/customer/1')
      cy.url().should('eq', 'http://localhost:3000/customer/1')
      // expect(cy.get('.btn').click().should("have.text", "Neue Anamnese erfassen"))
      cy.get('.btn').click()
      cy.url().should('eq', 'http://localhost:3000/anamnese/new')
    })
  })
})