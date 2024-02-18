// A arrow function => é utilizada para otimizar o código basicamente executa a mesma coisa do que se estivesse dentro de um bloco contendo function, return sem o uso das chaves {}
// O a['href=/rota ou link'] localiza um elemento através do link 
// toda busca por elementos segue a estruta a seguir primeiro o tipo do elemento (input, a # etc)
// Para Buscar um elemento pela classe basta colocar ponto . + nome da classe que localizar
// No cypress não é possível sem um plugin mas se caso fosse utilizar xpath o correto seria passar o seguinte parametro //+ o tipo do elemento[@+o tipo do elemento class, a, input]
// O contains é uma função que utiliza o css com texto para encontrar mais facilmente um elemento na tela
// A pasta Fixtures é onde definimos massas de teste estáticas ou seja que não precisam ser modificadas para fazer isso precisamos importar uma biblioteca em especifico no cypress
// através do comando (npm install cypress-file-upload --save-dev)
// O arquivo index.js localizado na pasta support é onde é executado antes de qualquer teste automatizado
// O arquivo comands localizado na pasta support é onde customizamos todo o projeto em cypress para trabalhar com emcapsulamento e reaproveitamento de dados
// Ao utilizar ^ nós usamos para montar um localizador css que localiza o elemento que começa com  algo
// Ao utilizar $ nós usamos para montar um localizador css que localiza o elemento que termina com algo
// Ao utilizar * nós usamos para montar um localizador css que localiza o elemento que termina com algo

import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'


describe('Signup', () => {


    //beforeEach(function () {
    //cy.fixture('deliver').then((d) => {
    //this.deliver = d
    //})
    //})

    //before(function(){
    //cy.log('tudo aqui é executado antes uma única vez ANTES DE  TODOS os casos de testes')
    //})
    // after(function(){
    //cy.log('tudo aqui é executado antes uma única vez DEPOIS DE  TODOS os casos de testes')
    // })
    //beforeEach(function(){
    //cy.log('tudo aqui é executado sempre  ANTES DE cada caso de teste')
    // })
    //afterEach(function(){
    //cy.log('tudo aqui é executado sempre DEPOIS DE cada caso de teste')
    //})

    it('User should Be Deliver', function () {

        var deliver = signupFactory.deliver()

        // Massa de teste
        //var deliver = {
        //name: 'Wilson Alves Silva',
        //cpf: '12345678911',
        //email: 'Wilson@teste.com',
        //phone: '11940398649',
        //Objeto Endereço
        //address: {
        //postalcode: '06411150',
        //street: 'Rua Campos Sales',
        // number: '1618',
        //details: 'Casa',
        //district: 'Vila Boa Vista',
        //city_state: 'Barueri/SP',
        //},
        // Massa de testes Método de Entrega    
        //deliver_method: 'Moto',
        //metodo_entrega: 'Bicicleta',
        //metodo_entrega: 'Van/Carro',
        // Massa de Teste CNH
        //nh: 'cnh-digital.jpg'
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
        // Encerra o processo de cadastro
        //cy.get('.swal2-container .swal2-confirm').click()
        // checkpoint
        //cy.get('main h1 ').should('have.text', 'Seja um parceiro entregador pela Buger Eats')

    })

    it('Incorrect Document', function () {
        var deliver = signupFactory.deliver()
        deliver.cpf = '123456789AA'
        //cy.viewport(1440, 900)
        //cy.visit('https://buger-eats.vercel.app')
        //cy.get('a[href="/deliver"]').click()
        //checkpoint
        //cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
        // Massa de teste
        //var deliver = {
        //name: 'Wilson Alves Silva',
        //cpf: '123456789AA',
        //email: 'Wilson@teste.com',
        //phone: '11940398649',
        //Objeto Endereço
        //address: {
        //postalcode: '06411150',
        //street: 'Rua Campos Sales',
        //number: '1618',
        //details: 'Casa',
        //district: 'Vila Boa Vista',
        //city_state: 'Barueri/SP',
        //},
        // Massa de testes Método de Entrega    
        //deliver_method: 'Moto',
        //metodo_entrega: 'Bicicleta',
        //metodo_entrega: 'Van/Carro',
        // Massa de Teste CNH
        //cnh: 'cnh-digital.jpg'
        //}
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')
        //Preenche os dados do Entregador
        //cy.get('input[name="name"]').type(delivery.name)
        //cy.get('input[name="cpf"]').type(delivery.cpf)
        //cy.get('input[name="email"]').type(delivery.email)
        //cy.get('input[name="whatsapp"]').type(delivery.phone)
        // Preenche os dados do Endereço
        //cy.get('input[name="postalcode"]').type(delivery.address.postalcode)
        //cy.get('input[type="button"]').click()
        //cy.get('input[name="address-number"]').type(delivery.address.number)
        //cy.get('input[name="address-details"]').type(delivery.address.details)
        // Valida preenchimento automático do Endereço através do Busca Cep
        //cy.get('input[name="address"]').should('have.value', delivery.address.street)
        //cy.get('input[name="district"]').should('have.value', delivery.address.district)
        //cy.get('input[name="city-uf"]').should('have.value', delivery.address.city_state)
        // Seleciona o método de Entrega
        //cy.contains('.delivery-method li', delivery.delivery_method).click()
        // Anexa o documento de CNH
        //cy.get('input[accept^="image"]').attachFile('/images/' + delivery.cnh
        //Valida o alerta de erro
        //cy.get('form button[type="submit"]').click()
        //cy.get('.field .alert-error').should('have.text', 'Oops! CPF inválido')
        // Encerra o processo de cadastro
        //cy.get('.swal2-container .swal2-confirm').click()
        // checkpoint
        //cy.get('main h1 ').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
    it('Incorrect E-mail', function () {
        var deliver = signupFactory.deliver()
        deliver.email = 'Wilsonteste.com'
        //cy.viewport(1440, 900)
        //cy.visit('https://buger-eats.vercel.app')
        //cy.get('a[href="/deliver"]').click()
        //checkpoint
        //cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
        // Massa de teste
        //var deliver = {
        //name: 'Wilson Alves Silva',
        //cpf: '123456789AA',
        //email: 'Wilson@teste.com',
        //phone: '11940398649',
        //Objeto Endereço
        //address: {
        //postalcode: '06411150',
        //street: 'Rua Campos Sales',
        //number: '1618',
        //details: 'Casa',
        //district: 'Vila Boa Vista',
        //city_state: 'Barueri/SP',
        //},
        // Massa de testes Método de Entrega    
        //deliver_method: 'Moto',
        //metodo_entrega: 'Bicicleta',
        //metodo_entrega: 'Van/Carro',
        // Massa de Teste CNH
        //cnh: 'cnh-digital.jpg'
        //}
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'deliver_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }    
        ]

        before(function () {
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })

    //it('Required Fields', function () {
    //    var deliver = signupFactory.deliver()
    //    deliver.email = 'Wilsonteste.com'

    //    signupPage.go()
   //     signupPage.submit()
    //    signupPage.alertMessageShouldBe('É necessário informar o nome')
     //   signupPage.alertMessageShouldBe('É necessário informar o CPF')
    //    signupPage.alertMessageShouldBe('É necessário informar o email')
    //    signupPage.alertMessageShouldBe('É necessário informar o CEP')
   //     signupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    //   signupPage.alertMessageShouldBe('Selecione o método de entrega')
     //   signupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
   // })
})