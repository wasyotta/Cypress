
// O describe serve para definir o nome da suite de testes
// Cada caso de teste é definido dentro do "it"
// Cada item após a palavra reservada Cy são funções e métodos do JavaScript
// a tag # é utilizada para buscar elementos pelo id utilizando o CSS selector


describe('home pag ', ()=>{
    it('app deve estar online', ()=>{
        // este código se tornou desnecessário ao longo do desenvolvimento pois o view port já esta definido no cypress.json cy.viewport(1440,900)
        // a URL padrão também esta definida no cypress.json sendo assim só é preciso definir a url com barra pois a URL absoluta ja esta definida
        cy.visit ('/')
        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
    
})