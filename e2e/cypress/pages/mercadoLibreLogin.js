class loginMeli{
    constructor(){
        this.loginIndex='[data-link-id="login"]';
        this.userInput = '[id="user_id"]';
        this.userButton='button > .andes-button__content';
        this.passInput = '[id="password"]';
        this.passButton='button#action-complete > .andes-button__content';
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
    
    getOfferButton(){
        return cy.get('a[href="https://www.mercadolibre.com.ar/ofertas#nav-header"]');
    }
    get2000Button(){
        return  cy.get('main#root-app section.filters_carousel div section div.andes-carousel-snapped__wrapper div:nth-child(6) img[alt="Menos de $2000"]');
    }
     
}