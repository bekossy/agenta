describe("Playground Prompt Test", function () {
    before(() => {
        cy.createVariant()
    })

    it("Should test prompt functionality in the Playground", () => {
        cy.get('[data-cy^="testview-input-parameters-"]').eq(0).type("Germany")
        cy.get('[data-cy="testview-input-parameters-run-button"]').click()
        cy.get('[data-cy="testview-input-parameters-result"]').should("have.value", "Loading...")
        cy.get('[data-cy="testview-input-parameters-result"]').should(
            "have.value",
            "The capital of Germany is Berlin.",
        )
        cy.get(".ant-message-notice-content").should("not.exist")
    })

    after(() => {
        cy.cleanupVariantAndTestset()
    })
})

Cypress.Screenshot.defaults({capture: "runner"})
