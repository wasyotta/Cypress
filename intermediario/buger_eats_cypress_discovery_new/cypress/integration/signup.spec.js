import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import signupPage from '../pages/SignupPage'

describe('Signup', function () {

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    it('User Should Be Deliver', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContetShouldBe(expectedMessage)
    })

    it('Incorrect Document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000001ab13'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect E-mail', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'will.teste.com'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
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
})
