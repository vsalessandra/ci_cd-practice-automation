import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import cadastro_page from "../pages/cadastro_page"

Given("I am on register screen", () => {
    home_page.acessRegister()
})

When("I click on register", () => {
    cadastro_page.clickRegister()
})

When("I fill name on register", () => {
    cadastro_page.fillNameRegister('Alessandra')
})

When("I fill e-mail on register", () => {
    cadastro_page.fillEmailRegister('@usuario')
})

When("I fill password on register", () => {
    cadastro_page.fillPasswordRegister('123')
})

When("I fill my datas of register", () => {
    cadastro_page.fillNameRegister('Alessandra')
    cadastro_page.fillEmailRegister('ale@gmail.com')
    cadastro_page.fillPasswordRegister('123456')
})

Then("I see the message {string} on register", (message) => {
    cadastro_page.messageErrorRegister(message)
})

Then("I see sucess message on register", () => {
    cadastro_page.sucessMessageRegister('Alessandra')
})