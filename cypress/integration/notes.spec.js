/// <reference types = "cypress" />

describe('Notes', () => {
  it('Deve ser capaz de criar novas notas', () => {
    cy.visit('https://day-notes.netlify.app');
    // cy.get() - busca um elemento
    // .type() - insere um texto
    cy.get('#app > aside > form > div:nth-child(1) > input[type=text]').type(
      'Nova nota'
    );
    cy.get('#app > aside > form > div:nth-child(2) > textarea').type(
      'Fazendo testes E2E com Cypress.'
    );

    cy.intercept('POST', '**/annotations').as('postNote');

    cy.get('#btn_submit').click();

    cy.wait('@postNote').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(200);
    });
  });

  it('Usuário pode fazer alterações em notas existentes', () => {
    cy.intercept('PUT', '**/contents/*').as('putNotes');
    cy.get('ul > :nth-child(2) > textarea')
      .click()
      .type(' - Fazendo alterações em uma nota existente');
    cy.get(':nth-child(2) > :nth-child(1) > strong').click();

    cy.wait('@putNotes').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(200);
    });
  });

  it('Usuário pode alterar a prioridade da anotação. ', () => {
      cy.intercept('PUT', '**/priorities/**').as('putPriority')
    cy.get(':nth-child(2) > span > svg').click();
    cy.wait('@putPriority').then((xhr) => {
        expect(xhr.response.statusCode).be.eq(200)
    })
});

  it('Usuário pode filtrar anotações por prioridade. ', () => {
    cy.get(
      ':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .jss6'
    ).click();
  });

  it('Usuário pode filtrar anotações por anotações normais. ', () => {
    cy.get(
      ':nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .jss6'
    ).click();

  });

  it('Usuário pode filtrar anotações por todas as anotações. ', () => {
    cy.get(
      ':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss6'
    ).click();
  });

  it('Usuário pode deletar anotações.', () => {
    cy.intercept('DELETE', '**/annotations/*').as('deleteNote');
    cy.get(':nth-child(2) > :nth-child(1) > div > svg').click();
    cy.wait('@deleteNote').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(200);
    });
  });
});
