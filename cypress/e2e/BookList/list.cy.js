/// <reference types='cypress' >

describe('Visualizar Lista de Livros.', () => {
    it('Deve apresentar uma lista com 12 itens', () => {
        cy.visit('http://localhost:5173/');
        cy.get('[data-cy="booksList"]').should('have.length', 12);
    });

    it('Deve apresentar uma lista com 2 itens ao executar uma pesquisa', () => {
        cy.visit('http://localhost:5173/');
        const filterInput = cy.get('[data-cy="filterInput"]');
        filterInput.type('fantasia');
        const booksList = cy.get('[data-cy="booksList"]');
        booksList.should('have.length', 2);
    });
});