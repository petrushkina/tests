
describe('создание e-mail выпуска', function() {
  before(() => {
    cy.login({ login: Cypress.env('login'), password: Cypress.env('password')})
  })
  //иногда нужно нажать "ПРОДОЛЖИТЬ", тест ломается иногда
    it ('перейти в рассылки', function() {
  	  cy.visit('https://app.sendsay.ru/campaigns/issues')
      cy.url().should('include','/issues')
    })
    it ('перейти к созданию выпуска', function() {
  //проверять  высвечивается ли сообщение при наведение на кнопку "создать выпуск"??
      cy.get('.action-button__wrapper').click()
      cy.get('.ChannelMenuItem > .ChannelMenuItem-wrapper').contains('Email').click() // Повляется модальное окно
      cy.url().should('include','/issues/')//https://app.sendsay.ru/campaigns/issues/draft-157
    })

// Шаги визарда
    //it ('шаг: выбрать аудиторию', function() {
       //cy.contains('Выбрать аудиторию').click()
        ///cy.contains('Выберете список или сегмент').click()
        //cy.get('.ReactVirtualized__Grid__innerScrollContainer').click()
        //cy.contains('Сохранить').click()
        //cy.contains('Необходимо заполнить поле') // должно содержать сколько штук, сообщения относятся к чему
       // cy.contains('Отмена').click()
        //cy.contains('Аудитория').click()
      // Проверить не сохранились ли данные
       // cy.get('.ReactVirtualized__Grid__innerScrollContainer')
        // сy.get('.ReactVirtualized__Grid__innerScrollContainer').should('include', '[style="height: 40px; left: 0px; position: absolute; top: 0px; width: 100%;"] > .MenuItem > .MenuItem-content').contains('Достыпные для рассылки email').click()  // фокус в середине, наверное нужно извенить фокус 
   // }) 
       // Выпадающее меню со списком из 2 элементов
      //cy.c('Выберете список или сегмент').click()

    it('шаг: отправитель и тема', function() {

      //примерный возможный СЦЕНАРИЙ:
      //прейтив в раздел нажав на зоголовок
      //заполнить данные
      //нажать отмена
      //проверить отменились ли данные?? стоит ли проверять
      //нажать кнопку настроить
      //заполнить данные 
      //сохаранить
      //данные отображаются верно
      //кнопка изменилась на "ИЗМЕНИТЬ"
      //cy.contains('Отмена').click() //Пока не буду проверять кнопку отмена

	    cy.get(':nth-child(2) > .WizardStep').contains('Настроить').click() // добавить еще один одно закрепление к самой кнопки должна содержать Настроить
	    //cy.get('.WizardStepSubmitAndCloseButtons-submitButton > .Button > .Button-wrapper').click()
      cy.contains('Сохранить').click()
      // проверять наличие сообщение у каждого input при пустом вводе
      cy.get(':nth-child(1) > .field-layout').contains('Необходимо заполнить поле')
      cy.get(':nth-child(2) > .field-layout').contains('Необходимо заполнить поле')
      cy.get(':nth-child(3) > .field-layout').contains('Необходимо заполнить поле')
      cy.get('.Select-target > .TextArea > .TextArea-input').type('test')
	    cy.contains('Выберите email').click()
	    cy.get('.ReactVirtualized__Grid__innerScrollContainer').click()
	     // Разобраться с меню , необходимо создать команду селекта!!
	    cy.get('[name="subject"]').type('test')
	    cy.contains('Сохранить').click()
      //нужно проверить нажатие переходом на url и там проверяем
      cy.get(':nth-child(2) > .WizardStep').should('contain','test','test')
      cy.get(':nth-child(2) > .WizardStep').contains('Изменить') // добавить еще один одно закрепление к самой кнопки должна содержать Настроить
	      // После сохранения проверить корректны ли данные 
    })

    it('шаг: письмо', function() {
      cy.get(':nth-child(3) > .WizardStep').contains('Создать письмо').click()
      cy.get('.GalleryCards-content > :nth-child(1) > .GalleryCard-preview > .GalleryCard-previewContent > .GalleryCard-shadow').click()
      cy.contains('Сохранить и закрыть').click()
      //Проверить верный ли вставился шаблон
      cy.get(':nth-child(3) > .WizardStep').should('contain', 'Сменить шаблон', 'Добавить текстовую версию', 'Добавить AMP-версию', 'Прикрепить файл', 'Отправить тестовую копию') // МОЖНО ВЫНЕСТИ ОТДЕЛЛЬНО ЧТО ДОЛЖНО ВХОЖИТЬ В МЕНЮ
      cy.get(':nth-child(3) > .WizardStep').contains('Изменить')  
    })

    it('шаг: дополнительные настройки', function() {
   	  cy.get(':nth-child(4) > .WizardStep').contains('Настроить').click()
      //Проверить что чек-боксы сняты!!
      //Проставить чек-боксы
      cy.contains('Отмена').click()
      cy.contains('Дополнительные настройки').click()
      //Проверить что чек-боксы сняты!! cy.get('[type="checkbox"]').check('empty')
   	  cy.contains('Сохранить').click()
      cy.get(':nth-child(4) > .WizardStep').contains('Изменить')
      //проверить что мы отправляем без дополнительных натсроек
    })

    //Отправка Email-выпуска
    it('отправка', function() {
    	cy.contains('Отправить').click()
    	//Подтвердить рассылку
    	сy.get('.dialog__action-button > .Button > .Button-wrapper').click() // Выпусить
    	//Проверить как выглядит окно?
    	//Проверить работу кнопки отмена и крестика а также отмену действия нажатием на область экрана?

    //Должны оказаться на странице 'https://app.sendsay.ru/campaigns/issues'
    //Проверить создание нового выпуска с введенными данными!!
    })
})
  