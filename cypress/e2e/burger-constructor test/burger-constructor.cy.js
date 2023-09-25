describe("burger constructor test", () => {
  it("open main page", () => {
    cy.visit("http://localhost:3001");
  });
  it("dnd of the ingredient", () => {
    cy.visit("http://localhost:3001");
    cy.get('div[draggable="true"]').first().drag(".main_burgerBar__sOxnh");
    cy.get('div[draggable="true"]')
      .eq(5)
      .then(($elem) => {
        cy.wrap($elem).drag(".main_burgerBar__sOxnh");
      });
    cy.get('div[draggable="true"]')
      .eq(10)
      .then(($elem) => {
        cy.wrap($elem).drag(".main_burgerBar__sOxnh");
      });
    cy.get('div[draggable="true"]')
      .eq(11)
      .then(($elem) => {
        cy.wrap($elem).drag(".main_burgerBar__sOxnh");
      });
  });
});
