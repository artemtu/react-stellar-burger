describe("burger constructor test", () => {
  it("open main page", () => {
    cy.visit("http://localhost:3001");
  });
  it("dnd for ingredients", () => {
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
    cy.get(".ingredients_constructorBurger__St8Eo")
      .eq(1)
      .then(($elem) => {
        cy.get(".ingredients_constructorBurger__St8Eo")
          .eq(0)
          .then(($firstElem) => {
            $elem
              .get(0)
              .parentNode.insertBefore($elem.get(0), $firstElem.get(0));
          });
      });
  });
});
