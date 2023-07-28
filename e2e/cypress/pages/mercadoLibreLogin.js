class loginMeli{
    constructor(){
        this.loginIndex='[data-link-id="login"]';
        this.userInput = '[id="user_id"]';
        this.userButton='button > .andes-button__content';
        this.passInput = '[id="password"]';
        this.passButton='button#action-complete > .andes-button__content';
        //this.offerButton = 'li:nth-of-type(2) > .nav-menu-item-link';
        //this.offerButton = '[title="Ver todas"]';
        //this.last2000 = 'li:nth-of-type(6) > .carousel_item';
    }
}


export default class login {
    constructor(){
        this.locators=new loginMeli();
    }

    getLoginIndex(){
        return cy.get(this.locators.loginIndex);
    }
    //Pantalla input user
    getUserButton(){
        return cy.get(this.locators.userButton);
    }
    //Index 'input text'
    getUserInput(){
        return cy.get(this.locators.userInput);
    }
    //Pantalla input password
    getPassInput(){
        return cy.get(this.locators.passInput);
    }
    getPassButton(){
        return cy.get(this.locators.passButton);
    }
    /**
    getOfferButton(){
        return cy.get(this.locators.offerButton);
    }
    get2000Button(){
        return cy.get(this.locators.last2000);
    }
     */
}