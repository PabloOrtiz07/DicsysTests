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
    cy.wait(2000); // Espera 2 segundos 
  })
})
describe('Click on MercadoLibre Offer Link', () => {
  it('Should click on the MercadoLibre Offer link', () => {
    cy.visit('https://www.mercadolibre.com.ar'); // Replace with the actual URL

    // Use cy.get() with the attribute selector to find and click the link
      const login = new loginMeli();

      login.getOfferButton().click();
      login.get2000Button().click();   
      cy.wait(2000);
  });
});