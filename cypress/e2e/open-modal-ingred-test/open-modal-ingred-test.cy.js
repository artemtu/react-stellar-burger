import { testUrl } from "../../test-constants";
import { draggableDivSelector } from "../../test-constants";

describe("open modal with ingredient test", () => {
  it("open main page", () => {
    cy.visit(testUrl);
    cy.get(draggableDivSelector).eq(10).click();

    cy.wait(4000);
    cy.get('[class*="modal_close__button"]').click();
  });
});
