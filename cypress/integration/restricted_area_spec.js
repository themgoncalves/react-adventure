const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8080';
const PATHNAME = '/restricted-area';

describe('Restricted Area', () => {
  it('.should() - redirect to Login Page', () => {
    cy.visit(`${HOST}:${PORT}${PATHNAME}`);
    cy.location('pathname').should('eq', '/login');
  });

  context('Actions', () => {
    before(() => {
      cy.visit(`${HOST}:${PORT}${PATHNAME}`);
    });

    it('.type() - type the login credentials', () => {
      cy.get(':nth-child(1) > .sc-htoDjs')
        .type('fake@email.com').should('have.value', 'fake@email.com');

      cy.get(':nth-child(2) > .sc-htoDjs')
        .type('my-$p3c14aL-PwD*', { delay: 100 }).should('have.value', 'my-$p3c14aL-PwD*');
    });

    it('.submit() - the login credentials', () => {
      cy.get('.sc-gzVnrw').click();
    });

    it('.should() - redirect to Home Page', () => {
      cy.location('pathname').should('eq', '/');
    });

    it('.should() - allow access Restricted Area', () => {
      cy.get(':nth-child(2) > a').click();
      cy.location('pathname').should('eq', '/restricted-area', { delay: 100 });
    });
  });
});
