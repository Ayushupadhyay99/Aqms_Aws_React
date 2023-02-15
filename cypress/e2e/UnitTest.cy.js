describe('UnitTesting of Aqms FrontEnd', () => {

  /**
   * test case for testing the response status and headers of the CarbonDioxideData component
  */
  it('CarbonDioxideData Component-Test1', () => {
     cy.request('http://localhost:3000/CarbonDioxideData')
    .should((response) => {
      expect(response.status).to.eq(200)
      expect(response).to.have.property('headers')
      
 
    })
  })
/**
* test case visits the 'CarbonDioxideData' page and verifies that the page contains the heading 'Carbon Dioxide Data'
*/
  it('CarbonDioxideData Component-Test2', () => {
    cy.visit('http://localhost:3000/CarbonDioxideData')
    cy.get('h3').should('contain.text','Carbon Dioxide Data')
   
    cy.get('button')
            .should('contain.text','Ozone Data')
    cy.get('tr').should('contain.text', 5)
   
  });

  /**
   * test case for testing the response status and headers of the User Component component
  */

  it('User Component-Test3', () => {
      cy.request('http://localhost:3000/')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
      })
  });

  it('User Component-Test4', () => {
        cy.visit('http://localhost:3000/')
       // cy.get('h5').should('contain.text','Select Floor :    ')
        
        cy.get('button')
                        .should('contain.text','Ozone Data')
        cy.get('tr').should('contain.text', 2022)
        
       
  });  

  it('Ozone Component-Test5', () => {
    cy.request('http://localhost:3000/dustparticalData')
     .should((response) => {
      expect(response.status).to.eq(200)
      expect(response).to.have.property('headers')
    })      
         
  });  
  it('Ozone Component-Test6', () => {
    cy.visit('http://localhost:3000/dustparticalData')
    cy.get('h3').should('contain.text','Ozone Data')
    
    cy.get('button')
            .should('contain.text','Ozone Data')
    cy.get('tr').should('contain.text', 13)       
           
  }); 
 
})