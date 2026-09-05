Feature: Cadastro de Usuário

Background: Acess register screen
Given: I am on register screen

Scenario: Campo nome vazio
    When: I click on register
    Then: I see the message "O campo nome deve ser prenchido corretamente" on register

Scenario: Campo email vazio
    And: I fill name on register
    When: I click on register
    Then: I see the message "O campo e-mail deve ser prenchido corretamente" on register

Scenario: Campo email invalido
    And: I fill name on register
    And: I fill e-mail on register
    When: I click on register
    Then: I see the message "O campo e-mail deve ser prenchido corretamente" on register

Scenario: Campo senha invalida
    And: I fill name on register
    And: I fill e-mail on register
    And: I fill password on register
    When: I click on register
    Then: I see the message "O campo senha deve ter pelo menos 6 dígitos" on register

Scenario: Campo senha vazio
    And: I fill name on register
    And: I fill e-mail on register
    When: I click on register
    Then: I see the message "O campo senha deve ter pelo menos 6 dígitos" on register

Scenario: Cadastro com sucesso
    And: I fill my datas of register
    When: I click on register
    Then: I see sucess message on register