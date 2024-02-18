

class SignupPage {

    go() {
        //cy.viewport(1440, 900)  esta linha de código não é mais necessário porque as dimesões foram adequadas no arquivo cypress.json
        cy.visit('/') 
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillform(deliver) {

        // O sistema preenche os dados iniciais do entregador
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.phone)


        //O sistema preenche o campo cep e clica no botão para fazer a busca
        cy.get('input[name="postalcode"]').type(deliver.address.postal_code)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        //O sistema preenche os campos número e complemento
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)


        //O sistema valida se os dados do endereço bairro e cidade são os mesmos da massa de teste
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    submit() {
        cy.get('form button[type="submit"]').click()
    }

    modalContetShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {
        //cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
        
    }
}

export default new  SignupPage;