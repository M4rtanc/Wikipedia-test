describe("Wikipedia test", () => {
    it("Search Schwarzenegger on Wikipedia and verifies", () => {
      cy.visit("https://en.wikipedia.org/wiki/Main_Page");
  
      cy.get("input#searchInput").type("Schwarzenegger");
  
      cy.get('button:contains("Search")').click();

      cy.contains("Arnold Schwarzenegger").should("exist");
    });
  });
