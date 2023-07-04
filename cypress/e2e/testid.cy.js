describe('Coop Panga kodulaenukalkulaatori automaatne test', () => {
  before(() => {
    cy.visit('https://www.cooppank.ee/kodulaen', {
      onBeforeLoad(win) {
        cy.spy(win, '$').as('jquery');
        cy.spy(win, 'jQuery').as('jquery');
      },
    });
  });

  it('Kontrollige veebilehe laadimist', () => {
    cy.url().should('eq', 'https://www.cooppank.ee/kodulaen');
    cy.title().should('contain', 'Kodulaen');
  });

  it('Kontrollige kalkulaatori elementide nähtavust', () => {
    cy.get('@jquery').should('be.calledWith', '#summa');
    cy.get('@jquery').should('be.calledWith', '#sissemakse');
    cy.get('@jquery').should('be.calledWith', '#tagasimaksetabel');
    cy.get('@jquery').should('be.calledWith', '#arvuta');
  });

  it('Kontrollige kalkulaatori elementide sisu', () => {
    cy.get('@jquery').should('be.calledWith', '#summa');
    cy.get('@jquery').should('be.calledWith', '#sissemakse');
    cy.get('@jquery').should('be.calledWith', '#tagasimaksetabel');
    cy.get('@jquery').should('be.calledWith', '#arvuta');
  });
});
