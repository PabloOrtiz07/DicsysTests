import loginMeli from "../pages/mercadoLibreLogin.js"

describe('Login de Mercado Libre correcto',()=>{
    beforeEach(()=>{
      cy.visit('https://www.mercadolibre.com.ar/')
    })
    it('Login valido Mercado Libre',()=>{
      const login = new loginMeli();
      login.getLoginIndex().click();
      cy.wait(1000); // Espera 1 segundo 
      login.getUserInput().type("TEST0548");
      login.getUserButton().click();
      login.getPassInput().type("qatest328");
      login.getPassButton().click();
      cy.wait(2000); // Espera 2 segundos 
    })
})

describe('Login de Mercado Libre incorrecto',()=>{
  beforeEach(()=>{
    cy.visit('https://www.mercadolibre.com.ar/')
  })
  it('Login invalido Mercado Libre',()=>{
    const login = new loginMeli();
    login.getLoginIndex().click();
    cy.wait(1000); // Espera 1 segundo 
    login.getUserInput().type("testingUser");
    login.getUserButton().click();
    // login.getPassInput().type("testingPass");
    // login.getPassButton().click();
    // cy.wait(2000); // Espera 2 segundos 
  })
})

describe('Test ofertas menores a $2000 en Mercado Libre',()=>{
  beforeEach(()=>{
    cy.visit('https://www.mercadolibre.com.ar/')
  })
  it('ofertas menores a $2000 Mercado Libre',()=>{
    const login = new loginMeli();
    //login.getOfferButton.click();
    cy.wait(1000); // Espera 1 segundo 
    //login.get2000Button.click();
    cy.get('a[href="https://www.mercadolibre.com.ar/ofertas#nav-header%22]').click();
    cy.wait(2000); // Espera 2 segundos 
  })
})