describe("burger constructor test", () => {
  it("open main page", () => {
    cy.visit("http://localhost:3001");
  });
  it("dnd of the ingredient", () => {
    cy.visit("http://localhost:3001");
    cy.get('div[draggable="true"]').first().drag(".main_burgerBar__sOxnh");
  });
});
