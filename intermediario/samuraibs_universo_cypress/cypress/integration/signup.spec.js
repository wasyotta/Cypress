// Query para deletar usuário do banco de dados na nuvem Delete from public.users where user="willtesta@test.com
// Toda vez que precisar importar uma biblioteca especifica para alguma coisa é necessário adicionar 
//o comando import nome da lib 'aqui dentro vai o nome correto da lib'
// A lib é @faker-js/faker serve para gerar dados aleatórios que não existem
//import faker from '@faker-js/faker'
//const name = faker.name.firstName("male")
//const email = faker.internet.email()
//const password = faker.datatype.uuid()
//const { default: signup } = require("../support/pages/signup")

import signupPage from '../support/pages/signup'

describe('Cadastro', function () {
  context('Quando o usuário é novato', function () {
    const user = {
      name: 'Wilson Alves Silva',
      email: 'teste@qa.teste.com.br',
      password: '123456',
    }

    before(function () {
      cy.task('removeUser', user.email)
        .then(function (result) {
          console.log(result)
        })
    })

    it('Deve Cadastrar com sucesso', function () {
      signupPage.go()
      signupPage.form(user)
      signupPage.submit()
      signupPage.toast.shouldHaveText('Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
    })
  })

  context('Quando o e-mail já existe', function () {
    const user = {
      name: 'Wilson Alves Silva',
      email: 'teste@qa.teste.com.br',
      password: '123456',
      is_provider: true
    }

    before(function () {
      cy.task('removeUser', user.email)
        .then(function (result) {
          console.log(result)
        })

      cy.request(
        'POST',
        'http://localhost:3333/users',
        user
      ).then(function (response) {
        expect(response.status).to.eq(200)
      })
    })


    it('Não deve Cadastrar o usuário', function () {
      signupPage.go()
      signupPage.form(user)
      signupPage.submit()
      signupPage.toast.shouldHaveText('Email já cadastrado para outro usuário.')
    })

  })

  context('Quando o e-mail é inválido', function () {
    const user = {
      name: 'Wilson Alves Silva',
      email: 'testeqa.teste.com.br',
      password: '123456',
      is_provider: true
    }

    it('Deve exibir mensagem de erro', function () {
      signupPage.go()
      signupPage.form(user)
      signupPage.submit()
      signupPage.alertHaveText('Informe um email válido')

    })
  })

  context('Quando o campo senha é preenchido com menos de 6 caracteres', function () {

    const passwords = ['1', '1A', '1AB', '1ABC', '1ABDC']

    beforeEach(function () {
      signupPage.go()
    })
    passwords.forEach(function (p) {
      it('Deve exibir mensagem de erro', function () {
        const user = { name: 'Wilson Alves Silva', email: 'teste@qa.teste.com.br', password: p }
        signupPage.form(user)
        signupPage.submit()
      })
    })

    afterEach(function () {
      signupPage.alertHaveText('Pelo menos 6 caracteres')
    })
  })

  context('Quando não preencho nenhum dos campos', function () {

    const alertMessages = [
      'Nome é obrigatório',
      'E-mail é obrigatório',
      'Senha é obrigatória'
    ]
    before(function () {
      signupPage.go()
      signupPage.submit()
    })
    alertMessages.forEach(function (alert) {
      it('Deve exibir ' + alert.toLowerCase(), function () {
        signupPage.alertHaveText(alert)
      })
    })
  })
})


