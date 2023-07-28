
import automationSuscription from "../../pages/subscribeField";


/// <reference types="cypress" />

describe('suscripcion a newsletter', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com');
  });

  

  it('suscripcion al newsletter', () => {

    const suscribe = new automationSuscription();  
    suscribe.getSuscribeField().type("123456@gmail.com");
    suscribe.getSuscribeButton().click();
    
    });

});