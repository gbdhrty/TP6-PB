/// <reference types='cypress' >

describe('Visualizar Lista de Livros.', () => {
    it('Deve apresentar uma lista com 12 itens', () => {
        cy.visit('http://localhost:5173/');
        cy.get('[data-cy="booksList"]').should('have.length', 12);
    });

    it('Deve apresentar uma lista com 1 item ao executar uma pesquisa pelo título', () => {
        cy.visit('http://localhost:5173/');
        const filterInput = cy.get('[data-cy="filterInput"]');
        filterInput.type('o apanhador');
        const booksList = cy.get('[data-cy="booksList"]');
        booksList.should('have.length', 1);
    });

    it('Deve apresentar uma lista com 2 itens ao executar uma pesquisa pelo autor', () => {
        cy.visit('http://localhost:5173/');
        const filterInput = cy.get('[data-cy="filterInput"]');
        filterInput.type('orwell');
        const booksList = cy.get('[data-cy="booksList"]');
        booksList.should('have.length', 2);
    });

    it('Deve apresentar uma lista com 2 itens ao executar uma pesquisa pelo gênero', () => {
        cy.visit('http://localhost:5173/');
        const filterInput = cy.get('[data-cy="filterInput"]');
        filterInput.type('fantasia');
        const booksList = cy.get('[data-cy="booksList"]');
        booksList.should('have.length', 2);
    });
});