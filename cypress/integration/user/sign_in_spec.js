describe('вход в приложение', function() {
  beforeEach( function () {
    cy.visit('https://app.sendsay.ru/signin')
  })

  it ('сообщение о небходимости заполнить поля при пустом вводе', function() {
    cy.contains('Войти').click()
    cy.get('.signin-form > :nth-child(4)').contains('Необходимо заполнить поле')//сообщение относиться к блоку пароля
    cy.get('.signin-form > :nth-child(2)').contains('Необходимо заполнить поле')//сообщение относиться к блоку логина
    cy.url().should('include', '/signin')
  })

  it ('сообщение о небходимости заполнить поле при пустом вводе пароля', function() {
    cy.get('input[name="login"]').type(Cypress.env('login'))
    cy.contains('Войти').click()
    cy.get('.signin-form > :nth-child(4)').contains('Необходимо заполнить поле') //Проверить что сообщение относиться к блоку пароля
    cy.url().should('include', '/signin')
  })

  it ('сообщение о небходимости заполнить поля при пустом вводе логина', function() {
    cy.get('input[name="password"]').type(Cypress.env('password'))
    cy.contains('Войти').click()
    cy.get('.signin-form > :nth-child(2)').contains('Необходимо заполнить поле')//Проверить что сообщение относиться к блоку логина
    cy.url().should('include', '/signin')
  })

  it ('сообщение об ошибке при вводе неверного логина', function() {
    cy.get('input[name="login"]').type(Cypress.env('notLogin'))
    cy.get('input[name="password"]').type(Cypress.env('password'))
    cy.contains('Войти').click()
    cy.contains('Неправильный логин или пароль')
    cy.url().should('include', '/signin')
  })

  it ('сообщение об ошибке при вводе неверного пароля', function() {
    cy.get('input[name="login"]').type(Cypress.env('login'))
    cy.get('input[name="password"]').type(Cypress.env('notPassword'))
    cy.contains('Войти').click()
    cy.contains('Неправильный логин или пароль')
    cy.url().should('include', '/signin')
  })

  it ('сообщение об ошибке при вводе неверных данных', function() {
    cy.get('input[name="login"]').type(Cypress.env('notLogin'))
    cy.get('input[name="password"]').type(Cypress.env('notPassword'))
    cy.contains('Войти').click()
    cy.contains('Неправильный логин или пароль') 
    cy.url().should('include', '/signin')
  })
    
  it ('успешный вход при вводе верных данных', function() {
    cy.get('input[name="login"]').type(Cypress.env('login'))
    cy.get('input[name="password"]').type(Cypress.env('password'))
    cy.contains('Войти').click()
    cy.url().should('include','/dashboard')
    cy.get('.AccountMenu').contains(Cypress.env('login'))
  })
})