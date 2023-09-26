import { testUrl } from "../../test-constants";
import { draggableDivSelector, classBurgerBar,classConstructorBurger } from "../../test-constants";

describe("burger constructor test", () => {
  it("open main page", () => {
    cy.visit(testUrl);
  });
  it("dnd for ingredients", () => {
    cy.visit(testUrl);
    cy.get(draggableDivSelector).drag(classBurgerBar);

    cy.get(draggableDivSelector)
      .eq(5)
      .then(($elem) => {
        cy.wrap($elem).drag(classBurgerBar);
      });
    cy.get(draggableDivSelector)
      .eq(10)
      .then(($elem) => {
        cy.wrap($elem).drag(classBurgerBar); 
      });
    cy.get(draggableDivSelector)
      .eq(11)
      .then(($elem) => {
        cy.wrap($elem).drag(classBurgerBar);// здесь всё 
      });
      cy.get(classConstructorBurger)
      .eq(1)
      .then(($elem) => {
        cy.get(classConstructorBurger)
          .eq(0)
          .then(($firstElem) => {
            $elem
              .get(0)
              .parentNode.insertBefore($elem.get(0), $firstElem.get(0));
          });
        cy.get(draggableDivSelector).eq(1).drag(classBurgerBar);
      });
    cy.get("#extractionButton").click();
    cy.get('input[type="email"]').type("nibs770538@yandex.ru");
    cy.get('input[name="password"]').type("kreker");
    cy.get("#loginButton").click();
    cy.get("#extractionButton").click();
    cy.wait(20000);
    cy.get('.modal_close__button__7Qy2s').click();


  });
});
