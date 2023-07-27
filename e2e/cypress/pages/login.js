
class loginLocators{
    constructor(){
        this.loginIndex='[id="customer_menu_top"]';
        this.loginBtn='[title="Login"]';
        this.userInput = '[id="loginFrm_loginname"]';
        this.passwordInput = '[id="loginFrm_password"]';
    }
}


export default class login {
    constructor(){
        this.locators=new loginLocators();
    }

    getLoginIndex(){
        return cy.get(this.locators.loginIndex);
    }

    getLogin(){
        return cy.get(this.locators.loginBtn);
    }

    getUsuarioInput(){
        return cy.get(this.locators.userInput);
    }
    getPasswordInput(){
        return cy.get(this.locators.passwordInput);
    }
}