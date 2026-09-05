export default {
    clickLogin(){
        cy.get('#btnLogin').click()
    },

    verMensagemErro(message){
        cy.get('.invalid_input')
        .should('be.visible')
        .should('have.text', message)
    },

    fillEmail(email){
        cy.get('#user')
        .type(email)
    },

    fillPassword(senha){
        cy.get('#password')
        .type(senha)
    },

    checkSucessMessage(email){
        cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', 'Olá,  + ${email}')
    }
}