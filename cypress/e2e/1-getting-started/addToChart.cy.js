import loginPage from "../../pages/login.js"
import addToChartConfiguration from "../../pages/addToChart.js"

describe('Agregar a carrito con cuenta logueada',()=>{
  beforeEach(()=>{
    cy.visit('https://automationteststore.com/')
  })


  it('logueo valido y agrego 3 item del mismo tipo',()=>{
    const login = new loginPage();
    const addToChartConfigurations = new addToChartConfiguration();
    login.getLoginIndex().click();
    login.getUsuarioInput().type("preuba07");
    login.getPasswordInput().type("papapa123")
    login.getLogin().click();
    addToChartConfigurations.getMenuBtn().click();
    addToChartConfigurations.getItemBtn().click({ multiple: true });
    addToChartConfigurations.getQuantity().clear().type("3");
    addToChartConfigurations.getAddToChart().click();
})
})
