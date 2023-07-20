
class loginLocators{
    constructor(){
        //this.loginBtn = '[id="loginFrm"]';
        this.loginBtn='[title="Login"]';
        this.userInput = '[id="loginFrm_loginname"]';
        this.passwordInput = '[id="loginFrm_password"]';
    }
}

export default class login {
    constructor(){
        this.locators=new loginLocators();
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