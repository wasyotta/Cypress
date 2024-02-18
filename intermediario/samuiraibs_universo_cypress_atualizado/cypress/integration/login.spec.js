
import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dash'

describe('login', function () {

    context('Quando o usuário é muito bom', function () {
        const user = {
            name: 'Wilson Alves Silva',
            email: 'will.tester@samuraibs.com.br',
            password: '123456',
            is_provider: true
        }

        before(function () {
            cy.postUser(user)
        })

        it('Deve Logar com sucesso', function () {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()

            dashPage.header.userLoggedIn(user.name)
        })
    })

    context('Quando o usuário é bom, mas a senha esta incorreta', function () {
        const user = {
            name: 'Uiruson Lliw',
            email: 'samurai@kamikase.com',
            password: '123456',
            is_provider: true
        }

        before(function () {

            console.log(localStorage.getItem('@samurai:user'))
            cy.postUser(user).then(function () {
                user.password = '123654'
            })
        })

        it('Não deve permitir realizar o login', function () {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()

            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            loginPage.toast.shouldHaveText(message)
        })
    })

    context('Quando o formato do e-mail é inválido', function () {

        const emails = [
            'teste.teste.com.br',
            'yahoo.com',
            '@gmail.com',
            '@',
            'wilson@',
            '111',
            '!#$%%¨&*',
            'xpto1234',
        ]

        before(function () {
            loginPage.go()
        })

        emails.forEach(function (email) {

            it('Não é permitido Logar com o email: ' + email, function () {

                const user = { email: email, password: '123456' }

                loginPage.form(user)
                loginPage.submit()
                loginPage.alert.haveText('Informe um email válido')
            })
        })
    })

    context('Quando não preenche nenhum campo', function () {

        const alertMessages = [
            
            'E-mail é obrigatório',
            'Senha é obrigatória'
        ]

        before(function () {
            loginPage.go()
            loginPage.submit()
        })

        alertMessages.forEach(function (alert) {

            it('Dever exibir' + alert.toLowerCase(), function () {
                loginPage.alert.haveText(alert)

            })
        })
    })
})
