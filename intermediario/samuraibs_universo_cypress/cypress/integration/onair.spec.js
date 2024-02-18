// Title é a função que obtém o título da página
//Alterando arquivo para teste.

it('webapp deve estar online', function(){
  cy.visit("/")
  cy.title()
  .should('eq', 'Samurai Barbershop by QAninja')
})
