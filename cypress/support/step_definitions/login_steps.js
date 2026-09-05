import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"

Given("I am on login screen", () => {
    home_page.acessLogin()
})

Given("I fill e-mail", () => {
    login_page.fillEmail('ana@gmail.com')
})

Given("I fill my credentials", () => {
    login_page.fillEmail('ana@gmail.com')
    login_page.fillPassword('123456')
})

When("I click on login", () => {
    login_page.clickLogin()
})

Then("I see the message {string}", (message) => {
    login_page.verMensagemErro(message)
})

Then("I see sucess message", () => {
    login_page.checkSucessMessage('ana@gmail.com')
})