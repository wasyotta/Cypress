import { el } from './elements'

class Toast {

    shouldHaveText(expectedText) {
        cy.get(el.toast)
            .should('be.visible')
            .should('have.css', 'opacity', '1')
            .find('p')
            .should('have.text', expectedText)
    }
}   
export default new Toast()