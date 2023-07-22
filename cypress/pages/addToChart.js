
class loginLocators{
    constructor(){
        this.loginIndex='[id="customer_menu_top"]';
        this.loginBtn='[title="Login"]';
        this.userInput = '[id="loginFrm_loginname"]';
        this.passwordInput = '[id="loginFrm_password"]';
        this.itemBtn= 'a[title="Skinsheen Bronzer Stick"]';
        this.menuBtn='[class="active menu_home"]';
        this.quantity='[id="product_quantity"]';
    }
}

export default class addToChartConfiguration {
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
    getItemBtn() {
        return cy.get(this.locators.itemBtn).first();
    }
    getMenuBtn(){
        return cy.get(this.locators.menuBtn);
    }
    getQuantity(){
        return cy.get(this.locators.quantity);
    }
    getAddToChart(){
        return cy.get('form#product ul.productpagecart a[href="#"]');
        
    }

}