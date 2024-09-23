import { validateFullName } from "../full-name";

describe("Validations -> Full name", () => {
  it("Should validate strings as full name", () => {
    expect(validateFullName("Sample user")).toBe(true);
    expect(validateFullName("A B")).toBe(true);
  });

  it("Should validate according to full name criterias", () => {
    expect(validateFullName("Username")).toBe(false);
    expect(validateFullName("1 guy")).toBe(false);
    expect(validateFullName("A ")).toBe(false);
    expect(validateFullName("A")).toBe(false);
  })
});