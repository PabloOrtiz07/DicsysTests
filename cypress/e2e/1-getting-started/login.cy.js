
import loginPage from "../../pages/login.js"

describe('Logueo de pagina',()=>{
  beforeEach(()=>{
    cy.visit('https://automationteststore.com/index.php?rt=account/login')
  })


  it('logueo valido',()=>{
    const login = new loginPage();
    login.getUsuarioInput().type("preuba07");
    login.getPasswordInput().type("papapa123")
    login.getLogin().click();
  })
})