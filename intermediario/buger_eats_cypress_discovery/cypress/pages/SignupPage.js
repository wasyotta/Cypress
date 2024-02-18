//O padrão Pascal case As Iniciais de cada palavra se inicia com letra maiscula utilizada para declarar uma classe
// O padrão camelCase, utilizadas para funcões e métodos se inicia a primeira inicial com minuscula e as demais com maiscula
//

class SignupPage {

    go() {
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        //checkpoint
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) {
        //Preenche os dados do Entregador
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.phone)

        // Preenche os dados do Endereço
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        // Valida preenchimento automático do Endereço através do Busca Cep
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        // Seleciona o método de Entrega
        cy.contains('.delivery-method li', deliver.deliver_method).click()

        // Anexa o documento de CNH
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    submit() {
        //Submete o formulário
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {
        //cy.get('.field .alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }

    //alertMessageShouldBe(expectedMessage){
        //cy.get('.field-group .alert-error').should('have.text', expectedMessage)
    //}

}

export default new SignupPage;