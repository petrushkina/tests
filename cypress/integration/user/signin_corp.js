//КОРПОРАТИВНЫЙ ВХОД

describe('вход в приложение', function() {
  beforeEach( function () {
    cy.visit('https://app.sendsay.ru/signin/corporate')
  })

  it ('сообщение о небходимости заполнить поля при пустом вводе', function() {
    cy.contains('Войти').click()
    cy.get('.corporate-signin-form > :nth-child(3)').contains('Необходимо заполнить поле')//сообщение относиться к блоку логина
    cy.get('.corporate-signin-form > :nth-child(5)').contains('Необходимо заполнить поле') // сообщение относится к блоку саблогина
    cy.get('.corporate-signin-form > :nth-child(7)').contains('Необходимо заполнить поле')//сообщение относиться к блоку пароля
    cy.url().should('include', '/corporate')
  })

  it ('сообщение о небходимости заполнить поле при пустом вводе пароля', function() {
    cy.get('input[name="login"]').type(Cypress.env('login'))
    cy.get('input[name="sublogin"]').type(Cypress.env('sublogin'))
    cy.contains('Войти').click()
    cy.get('.corporate-signin-form > :nth-child(7)').contains('Необходимо заполнить поле') //Проверить что сообщение относиться к блоку пароля
    cy.url().should('include', '/corporate')
  })

  it ('сообщение о небходимости заполнить поля при пустом вводе логина', function() {
  	cy.get('input[name="sublogin"]').type(Cypress.env('sublogin'))
    cy.get('input[name="password"]').type(Cypress.env('newPassword'))
    cy.contains('Войти').click()
    cy.get('.corporate-signin-form > :nth-child(3)').contains('Необходимо заполнить поле')//Проверить что сообщение относиться к блоку логина
    cy.url().should('include', '/corporate')
  })

  it ('сообщение о небходимости заполнить поля при пустом вводе caблогина', function() {
  	cy.get('input[name="login"]').type(Cypress.env('login'))
    cy.get('input[name="password"]').type(Cypress.env('newPassword'))
    cy.contains('Войти').click()
    cy.get('.corporate-signin-form > :nth-child(5)').contains('Необходимо заполнить поле')//Проверить что сообщение относиться к блоку саблогина
    cy.url().should('include', '/corporate')
  })

  it ('сообщение об ошибке при вводе неверного логина', function() {
    cy.get('input[name="login"]').type(Cypress.env('notLogin'))
    cy.get('input[name="sublogin"]').type(Cypress.env('sublogin'))
    cy.get('input[name="password"]').type(Cypress.env('newPassword'))
    cy.contains('Войти').click()
    cy.contains('Неправильный логин или пароль')
    cy.url().should('include', '/corporate')
  })

  it ('сообщение об ошибке при вводе неверного саблогина', function() {
    cy.get('input[name="login"]').type(Cypress.env('login'))
    cy.get('input[name="password"]').type(Cypress.env('newPassword'))
    cy.get('input[name="sublogin"]').type(Cypress.env('notSublogin'))
    cy.contains('Войти').click()
    cy.contains('Неправильный логин или пароль')
    cy.url().should('include', '/corporate')
  })

 it ('сообщение об ошибке при вводе неверного пароля', function() {
    cy.get('input[name="login"]').type(Cypress.env('login'))
    cy.get('input[name="sublogin"]').type(Cypress.env('sublogin'))
    cy.get('input[name="password"]').type(Cypress.env('password')) // в данном случае можно проверить вход по паролю, актуальному для входа: логин-пароль - он не должен подойти 
    cy.contains('Войти').click()
    cy.contains('Неправильный логин или пароль')
    cy.url().should('include', '/corporate')
  })


  it ('сообщение об ошибке при вводе неверных данных', function() {
    cy.get('input[name="login"]').type(Cypress.env('notLogin'))
    cy.get('input[name="password"]').type(Cypress.env('notPassword'))
    cy.get('input[name="sublogin"]').type(Cypress.env('notSublogin'))
    cy.contains('Войти').click()
    cy.contains('Неправильный логин или пароль') 
    cy.url().should('include', '/corporate')
  })
    
  it ('успешный вход при вводе верных данных', function() {
    cy.get('input[name="login"]').type(Cypress.env('login'))
    cy.get('input[name="password"]').type(Cypress.env('newPassword'))
    cy.get('input[name="sublogin"]').type(Cypress.env('sublogin'))
    cy.contains('Войти').click()
    cy.url().should('include','/dashboard')
    cy.get('.AccountMenu').contains(Cypress.env('sublogin'))
  })
})