import TestAutomation from '../../support/pages/TestAutomation/index';

describe('Test Automation', () => {
    
it ('Acessando aplicação',() => {
    TestAutomation.acessarLogin();
  })

it('preenche todos os campos e envia o formulário', () => {
    TestAutomation.acessarLogin();
    TestAutomation.preencherCamposEVD(); 
    TestAutomation.preencherCamposEID();
    TestAutomation.preencherCamposEPD();
    TestAutomation.preencherCamposSPO();
    TestAutomation.preencherCamposSQ()
 })
})