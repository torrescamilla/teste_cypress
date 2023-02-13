//acoes de interacao com a pagina
import faker from 'faker-br'
import test from './elements'

class TestAutomation {
    acessarLogin() {
        cy.visit('http://sampleapp.tricentis.com/101/app.php').contains('Tricentis')
    }

    preencherCamposEVD() {
        cy.get(test.make).select(13).should('have.value', 'Toyota')
        cy.get(test.model).select(3).should('have.value', 'Moped')
        cy.get(test.cylinder).type('1000')
        cy.get(test.engine).type('200')
        cy.get(test.date).type('02/10/2020')
        cy.get(test.numberSeats).select(5).should('have.value', '5')
        cy.get(test.rightHdrive).click()
        cy.get(test.numberSeatsMotorcycle).select(2).should('have.value', '2')
        cy.get(test.fuelType).select(4).should('have.value', 'Gas')
        cy.get(test.payload).type('70')
        cy.get(test.totalWeight).type('150')
        cy.get(test.listPrice).type('20000')
        cy.get(test.licensePlateNumber).type('OOC1740')
        cy.get(test.annualMileage).type('200')
        cy.get(test.buttonNextFirst).click()

    }

    preencherCamposEID() {
        cy.get(test.firstName).type('Camilla')
        cy.get(test.lastName).type('Torres')
        cy.get(test.birthDate).type('04/17/1994')
        cy.get(test.gender).click()
        cy.get(test.streetAdress).type('Rua T-28')
        cy.get(test.country).select('Brazil').should('have.value', 'Brazil')
        cy.get(test.zipCode).type('74210040')
        cy.get(test.city).type('Goiânia')
        cy.get(test.occupation).select(5).should('have.value', 'Selfemployed')
        cy.get(test.hobbiesSpeeding).click().should('be.visible', 'Speeding')
        cy.get(test.website).type('teste.com')
        cy.get(test.pictureOpen).selectFile('cypress/fixtures/foto.jpg', {force: true}).should('be.visible', 'cypress/fixtures/foto.jpg')
        cy.get(test.buttonNextSecond).click()

    }

   preencherCamposEPD() {
        cy.get(test.startDate).type('06/13/2023')
        cy.get(test.insuranceSum).select(4).should('have.value', '10000000')
        cy.get(test.meritRating).select(7).should('have.value', 'Bonus 6')
        cy.get(test.damageInsurance).select(3).should('have.value', 'Full Coverage')
        cy.get(test.opitionalProductsEuroProtection).click().should('be.visible', 'Euro Protection')
        cy.get(test.courtesyCar).select(2).should('have.value', 'Yes')
        cy.get(test.buttonNextThird).click()

    }

    preencherCamposSPO() {
        cy.get(test.selectOptionGold).click()
        cy.get(test.buttonNextFourth).click()

    }

    preencherCamposSQ() {
        cy.get(test.email).type(faker.internet.email())
        cy.get(test.phone).type('62992716400')
        cy.get(test.username).type('Camilla')
        cy.get(test.password).type('Allimac04*')
        cy.get(test.confirmPassword).type('Allimac04*')
        cy.get(test.comments).type('Quero muito comprar essa motorcycle')
        cy.get(test.buttonSend).click().should('be.visible', 'Send e-mail sucess!')
        
        Cypress.on('uncaught:exception',() => {
            return false;
          });

    }
}
  export default new TestAutomation();