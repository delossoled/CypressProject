/// <reference types="cypress" />



it('echofin downloads page', function(){
    cy.visit('https://www.echofin.com/downloads/')
    cy.get('.mt-25').click()
    
    // cy.visit('https://www.echofin.com/downloads/')
    // cy.get('[href="https://assets.echofin.com/desktop/EchofinSetup.exe"]').click()
    // cy.verifyDownload('EchofinSetup.exe');

    cy.visit('https://www.echofin.com/downloads/')
    cy.get('[href="https://play.google.com/store/apps/details?id=com.echofin.echofin2"]').click()

})


describe('Windows download', () => {
    it('verifies Windows download', () => {
      cy.visit('https://www.echofin.com/downloads/');
      cy.get('[href="https://assets.echofin.com/desktop/EchofinSetup.exe"]').click();
      
      cy.verifyDownload('EchofinSetup.exe',{ timeout: 25000 });
    });
  });

  
  describe('Mac download', () => {
    it('verifies Mac download', () => {
      cy.visit('https://www.echofin.com/downloads/');
      cy.get('[href="https://assets.echofin.com/desktop/Echofin-2.0.0.dmg"]').click();
      
      cy.verifyDownload('Echofin-2.0.0.dmg',{ timeout: 25000 });
    });
  });

 
  describe('Linux download', () => {
    it('verifies Linux download', () => {
      cy.visit('https://www.echofin.com/downloads/');
      cy.get('[href="https://assets.echofin.com/desktop/echofin_2.0.0_amd64.deb"]').click();
      
      cy.verifyDownload('echofin_2.0.0_amd64.deb',{ timeout: 25000 });
    });
  });
