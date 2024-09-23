import { validateEmail } from "../email";

describe("Validations -> Emails", () => {
  it("Should validate emails accordingly", () => {
    expect(validateEmail("sample.email@mail.ru")).toBe(true);

    expect(validateEmail("wrong.email")).toBe(false);
    expect(validateEmail("wrong.email@")).toBe(false);
    expect(validateEmail("wrong.email@mail")).toBe(false);
  })
});