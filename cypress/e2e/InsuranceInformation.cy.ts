describe("Insurance Information page", () => {
  const PHONE_NUMBER = "09339668289";
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
  });

  describe("Submit Button", () => {
    it("Is disabled when user has not type his phone number and national ID", () => {
      cy.get('button[type="submit"]').should("be.disabled");
    });

    it("Should be enabled when user types his phone number and national ID", () => {
      cy.get('input[name="phoneNumber"]').type(PHONE_NUMBER);
      cy.get('input[name="nationalId"]').type(NATIONAL_ID);

      cy.get('button[type="submit"]').should("be.enabled");
    });
  });

  describe("Form Validation", () => {
    it("The input should show error messages when typing a wrong number or national ID", () => {
      cy.get('input[name="phoneNumber"]').type(PHONE_NUMBER + "0");
      cy.get('input[name="nationalId"]').type(NATIONAL_ID + "9");

      cy.get('button[type="submit"]').click();

      cy.contains("شماره تلفن همراه معتبر نیست.").should("be.visible");
      cy.contains("کدملی وارد شده معتبر نیست.").should("be.visible");
    });
  });

  describe("Select Address Modal", () => {
    it("Should be opened when clicking on select button", () => {
      cy.get('button[type="button"]').click();

      cy.url().should("eq", `${Cypress.config("baseUrl")}?modal=address`);
      cy.contains("انتخاب آدرس").should("be.visible");
    });

    it("Should show the list from API", () => {
      cy.get('button[type="button"]').click();

      cy.intercept("GET", "/my-addresses/", {
        statusCode: 200,
        body: mockedData,
      }).as("getData");

      cy.wait("@getData");

      cy.get("#address-list .address-item").should(
        "have.length",
        mockedData.length
      );

      cy.get("#address-list .address-item")
        .eq(0)
        .should("contain.text", mockedData[0].name)
        .and("contain.text", mockedData[0].details);

      cy.get("#address-list .address-item")
        .eq(1)
        .should("contain.text", mockedData[1].name)
        .and("contain.text", mockedData[1].details);
    });

    it("Should not select the chosen address if you click on close button", () => {
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

      cy.get("#close-modal").click();

      cy.url().should("eq", `${Cypress.config("baseUrl")}`);

      cy.contains(mockedData[0].details).should("not.exist");
    });

    it("Should select the chosen address if you click on choose button", () => {
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
    });
  });

  describe("Delete Address Modal", () => {
    beforeEach(() => {
      cy.get('button[type="button"]').click();

      cy.intercept("GET", "/my-addresses/", {
        statusCode: 200,
        body: mockedData,
      }).as("getData");

      cy.wait("@getData");

      cy.get(".delete-button").eq(0).click();
    });

    it("Should be opened when clicking on delete button", () => {
      cy.url().should("eq", `${Cypress.config("baseUrl")}?modal=delete`);
      cy.contains("حذف آدرس").should("be.visible");
    });

    it("Should go back to address modal when clicking on back button", () => {
      cy.url().should("eq", `${Cypress.config("baseUrl")}?modal=delete`);
      cy.go("back");

      cy.url().should("eq", `${Cypress.config("baseUrl")}?modal=address`);
    });

    it("Should delete the item on clicking the delete button", () => {
      cy.url().should("eq", `${Cypress.config("baseUrl")}?modal=delete`);
      cy.get("#confirm-delete").click();

      cy.url().should("eq", `${Cypress.config("baseUrl")}?modal=address`);

      cy.contains(mockedData[0].name).should("not.exist");
      cy.get("#address-list .address-item").should(
        "have.length",
        mockedData.length - 1
      );
    });
  });

  describe("Form Submission", () => {
    beforeEach(() => {
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
    });

    it("Redirects to succes page on successful submit", () => {
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

    it("Shows the error modal and you can re submit on the error modal", () => {
      cy.intercept("POST", "/order/completion/", {
        statusCode: 400,
        body: {
          errors: ["Something wrong happened"],
        },
      }).as("submitDataFailed");

      cy.get('button[type="submit"]').click();

      cy.wait("@submitDataFailed");

      cy.url().should("eq", `${Cypress.config("baseUrl")}?modal=error`);

      cy.intercept("POST", "/order/completion/", {
        statusCode: 200,
        body: {
          message: "Form submitted successfully",
        },
      }).as("submitData");

      cy.get("#re-submit").click();

      cy.wait("@submitData");

      cy.url().should("eq", `${Cypress.config("baseUrl")}successful-submit`);
    });
  });
});
