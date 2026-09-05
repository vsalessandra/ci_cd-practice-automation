export default {
    clickRegister(){
        cy.get('#btnRegister').click()
    },

    messageErrorRegister(message){
        cy.get('.errorLabel')
        .should('be.visible')
        .should('have.text', message)
    },

    fillNameRegister(nome){
        cy.get('#user')
        .type(nome)
    },

    fillPasswordRegister(senha){
        cy.get('#password')
        .type(senha)
    },

    fillEmailRegister(email){
        cy.get('#email')
        .type(email)
    },

    sucessMessageRegister(nome){
        cy.get('.swal2-title')
        .should('be.visible')
        .should('have.text', 'Cadastro realizado!')

        cy.get('.swal2-html-container')
        .should('be.visible')
        .should('have.text', 'Bem-vindo ' + nome)
    }
}