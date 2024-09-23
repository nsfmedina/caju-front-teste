import { validateCPF } from "../cpf"

describe("Validations -> CPF", () => {
  it("Should successfully validate valid CPFs", () => {
    expect(validateCPF("13906522709")).toBe(true);
    expect(validateCPF("139.065.227-09")).toBe(true);

    expect(validateCPF("12345678999")).toBe(false);
    expect(validateCPF("1122334455667788899")).toBe(false);
    expect(validateCPF(undefined)).toBe(false);
  });

  it("Should validate wrongfully masked CPFs, as long as they're valid as digits", () => {
    expect(validateCPF("139-065-227-09")).toBe(true);
  });
})