//1) o describe em javascript serve para definir uma suite de teste
//2) o sinal de igual seguido de um maior chama-se arrow function, nada mais é do que uma função em javascript
//3) it é uma palavra reservada utilizada para indicar que tudo dentro do bloco do it é um caso de teste
//4) no código o assert é uma expectativa(promisse)

describe('home page', () => {
    it('App should Be Online',()=>{
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})