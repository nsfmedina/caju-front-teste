import { mockAdmission } from "~/test-utils/fixtures/mock-admission";
import RegistrationCard from ".";
import { Admission } from "~/interfaces/common/admission";
import { renderWithContext, screen } from "~/test-utils/renderWithContext";

describe("RegistrationCard", () => {
  it("Should show a registration card", () => {
    renderWithContext(<RegistrationCard data={mockAdmission as Admission} />)

    expect(screen.getByText(mockAdmission.employeeName)).toBeInTheDocument();
  });

  describe("Button behavior ->", () => {
    it("Should portray variable behavior approved/reproved cards", () => {
      const approvedUser: Admission = {...mockAdmission, status: "APPROVED" };
      
      renderWithContext(<RegistrationCard data={approvedUser} />);

      expect(screen.queryByText(/Revisar novamente/i)).toBeInTheDocument();
      expect(screen.queryByText(/Aprovar/i)).toBeNull();
      expect(screen.queryByText(/Reprovar/i)).toBeNull();
    });

    it("Should portray variable behavior reviewable cards", () => {
      const reviewableUser: Admission = {...mockAdmission, status: "REVIEW" };

      renderWithContext(<RegistrationCard data={reviewableUser} />);

      expect(screen.queryByText(/Revisar novamente/i)).toBeNull();
      expect(screen.queryByText(/Aprovar/i)).toBeInTheDocument();
      expect(screen.queryByText(/Reprovar/i)).toBeInTheDocument();
    });
  })
})