class locatorsAutomationPage {
    constructor(){

        this.suscriptionField = "[id='appendedInputButton']";
        this.suscriptionbutton = "[type='submit']";
    }

}

export default class automationSuscription {
    constructor() {
      this.locators = new locatorsAutomationPage();
    }
  
    getSuscribeField(){
      return cy.get(this.locators.suscriptionField);
    }
  
    getSuscribeButton(){
      return cy.get(this.locators.suscriptionbutton);
    }  
    

  }