
import meLiSearch from "../../pages/meLiSearchBox";

/// <reference types="cypress" />

describe('busqueda de item en mercado libre', () => {
  beforeEach(() => {
    cy.visit('https://www.mercadolibre.com.ar/#from=homecom');
  });

  

  it('busqueda disco ssd', () => {

    const search = new meLiSearch();  
    search.getItemSearch().type("disco ssd");
    search.getSearch().click();
    
    });

});