/// <reference types="cypress" />

describe('Testes para a home', () => {
    it('deve renderizar 3 contatos', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 3)
    })
    it('deve adicionar contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input[type="text"]').type('ryan2')
        cy.get('input[type="email"]').type('email2@email.com')
        cy.get('input[type="tel"]').type('933332222')
        cy.get('button[type="submit"]').click()
    })
    it('deve renderizar 4 contatos', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 4)
    })
    it('deve alterar o contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('button[class="edit"]').eq(3).click()
        cy.get('input[type="text"]').type('ryan2')
        cy.get('input[type="email"]').type('email2@email.com')
        cy.get('input[type="tel"]').type('933332222')
        cy.get('button[type="submit"]').click()
    })
    it('deve deletar 1 contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('button[class="delete"]').eq(3).click()
    })
    
})