export default {
      acessLogin(){
        cy.visit('/')
        cy.get('#top_header')

        cy.get('.fa-user').click()
},

    acessRegister(){
        cy.visit('/')
        cy.get('#top_header')

        cy.get('.fa-lock').click()

    }
}