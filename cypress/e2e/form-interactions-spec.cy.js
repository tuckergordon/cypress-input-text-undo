import 'cypress-real-events/support';

describe('Form Interactions', () => {
  beforeEach(() => {
    cy.viewport(400, 300);
    cy.visit('/index.html');
  });

  it('can undo input text', () => {
    cy.get('input[type=text]').focus();
    cy.realType('abc');
    cy.get('input[type=text]').should('have.value', 'abc');
    cy.realPress(['Meta', 'Z']);
    cy.get('input[type=text]').should('have.value', '');
  });
});
