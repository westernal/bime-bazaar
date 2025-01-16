describe("Successful Submit Page", () => {
  const PHONE_NUMBER = "9339668289";
  const NATIONAL_ID = "2080927779";
  const mockedData = [
    {
      id: "1",
      name: "خانه پدری",
      details: "آجودانیه، خیابان سباری، پلاک 3، زنگ 140",
    },
    {
      id: "2",
      name: "خانه‌ی دوست",
      details: "تهران، شهرک غرب، بلوار دریا، کوچه فخار مقدم،ِ پلاک ۲۶، زنگ ۴",
    },
  ];

  beforeEach(() => {
    cy.visit("/");
    cy.get('input[name="phoneNumber"]').type(PHONE_NUMBER);
    cy.get('input[name="nationalId"]').type(NATIONAL_ID);

    cy.get('button[type="button"]').click();

    cy.intercept("GET", "/my-addresses/", {
      statusCode: 200,
      body: mockedData,
    }).as("getData");

    cy.wait("@getData");

    cy.get("#address-list .address-item")
      .eq(0)
      .find('input[type="radio"]')
      .click();

    cy.get("#choose").click();

    cy.url().should("eq", `${Cypress.config("baseUrl")}`);

    cy.contains(mockedData[0].details).should("be.visible");

    cy.intercept("POST", "/order/completion/", {
      statusCode: 200,
      body: {
        message: "Form submitted successfully",
      },
    }).as("submitData");

    cy.get('button[type="submit"]').click();

    cy.wait("@submitData");

    cy.url().should("eq", `${Cypress.config("baseUrl")}successful-submit`);
  });
  it("Doesn't reset user's input after clicking the back button", () => {
    cy.get("#back-button").click();

    cy.get('input[name="phoneNumber"]').should("have.value", PHONE_NUMBER);
    cy.get('input[name="nationalId"]').should("have.value", NATIONAL_ID);
    cy.contains(mockedData[0].details).should("be.visible");
  });
});
