class loginMeli{
    constructor(){
        this.loginIndex='[data-link-id="login"]';
        //pantalla user
        //this.loginIndex='[id="customer_menu_top"]';
        this.userInput = 'input[id="user_id"]';
        //this.userInput = 'input[data-testid="user_id"]';
        //'a[title="Skinsheen Bronzer Stick"]'
        this.userButton='button > .andes-button__content';
        //pantalla password
        this.passInput = '[data-link-id="password"]';
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

}