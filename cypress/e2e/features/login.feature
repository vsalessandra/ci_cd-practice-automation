Feature: Login
    
    Scenario: Login com campo e-mail vazio
    Given: I am on login screen
    When: I click on login
    Then: I see the message "E-mail invalido."

    Scenario: Login com campo senha vazio
    Given: I am on the login screen
    And: I fill e-mail
    When: I click on login
    Then: I see the message "Senha invalida."

    Scenario: Login com sucesso
    Given: I am on the login screen
    And: I fill my credentials
    When: I click on login
    Then: I see sucess message