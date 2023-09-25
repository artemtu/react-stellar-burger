describe("open modal with ingredient test", () => {
  it("open main page", () => {
    cy.visit("http://localhost:3001");
    cy.get('div[draggable="true"]').eq(10).click();

    cy.wait(4000);
    cy.get(".modal_close__button__7Qy2s").click();
  });
});
