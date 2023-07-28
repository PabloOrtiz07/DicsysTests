class locatorsMeLi {
    constructor(){

        this.itemSearch = "[id='cb1-edit']";
        this.search = "[class=nav-search-btn]";
    }

}

export default class meLiSearch {
    constructor() {
      this.locators = new locatorsMeLi();
    }
  
    getSearch(){
      return cy.get(this.locators.search);
    }
  
    getItemSearch(){
      return cy.get(this.locators.itemSearch);
    }  
    

  }