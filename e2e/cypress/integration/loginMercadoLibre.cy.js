import loginMeli from "../pages/mercadoLibreLogin.js"

describe('Login de Mercado Libre correcto',()=>{
    beforeEach(()=>{
      cy.visit('https://www.mercadolibre.com.ar/')
    })
  
  
    it('Login valido Mercado Libre',()=>{
      const login = new loginMeli();
      login.getLoginIndex().click();
      login.getUserInput().type("TEST0548");
      //login.getUserButton().click();
      //login.getPassInput().type("qatest328");
      //login.getPassButton().click();
      
    })
})
/* 
describe('Logueo de pagina erroneo con contraseña incorrecta',()=>{
    beforeEach(()=>{
      cy.visit('https://automationteststore.com/')
    })
  
  
    it('logueo valido',()=>{
      const login = new loginPage();
      login.getLoginIndex().click();
      login.getUsuarioInput().type("preuba07");
      login.getPasswordInput().type("2321")
      login.getLogin().click();
    })
})

describe('Logueo de pagina erroneo con usuario incorrecto',()=>{
    beforeEach(()=>{
      cy.visit('https://automationteststore.com/')
    })
  
  
    it('logueo valido',()=>{
      const login = new loginPage();
      login.getLoginIndex().click();
      login.getUsuarioInput().type("preuba07323");
      login.getPasswordInput().type("2321")
      login.getLogin().click();
    })
})
*/