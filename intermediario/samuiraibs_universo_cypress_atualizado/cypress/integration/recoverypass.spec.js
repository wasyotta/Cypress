import fpPage from '../support/pages/forgotpass'
import rpPage from '../support/pages/resetpass'



describe('Resgate de senha', function () {

    before(function () {
        cy.fixture('recovery').then(function (recovery) {
            this.data = recovery
        })
    })

    context('quando o usuário esquece a senha', function () {

        before(function () {
            cy.postUser(this.data)
        })

        it('deve poder resgatar por e-mail', function () {
            fpPage.go()
            fpPage.form(this.data.email)
            fpPage.submit()

            const message = ('Enviamos um e-mail para confirmar a recuperação de senha, cheque sua caixa de entrada.')
            fpPage.toast.shouldHaveText(message)


        })
    })

    context('quando o usuário solicita o resgate', function () {

        before(function () {
            cy.postUser(this.data)
            cy.recoveryPass(this.data.email)
        })

        it('deve cadastrar uma nova senha', function () {

            const token = Cypress.env('recoveryToken')
            rpPage.go(token)
            rpPage.form('654321', '654321')
            rpPage.submit()
            const Message = 'Agora você já pode logar com a sua nova senha secreta.'
            rpPage.toast.shouldHaveText(Message)
        })
    })
})


