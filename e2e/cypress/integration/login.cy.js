
import loginPage from "../pages/login.js"

describe('Logueo de pagina correcto',()=>{
  beforeEach(()=>{
    cy.visit('https://automationteststore.com/')
  })


  it('logueo valido',()=>{
    const login = new loginPage();
    login.getLoginIndex().click();
    login.getUsuarioInput().type("preuba07");
    login.getPasswordInput().type("papapa123")
    login.getLogin().click();
  })
})

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