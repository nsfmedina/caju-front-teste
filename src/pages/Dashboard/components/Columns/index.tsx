
import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import useRegistrations from "~/hooks/useAdmissions";
import { AdmissionStatus } from "~/types/common/admission";

type DashboardColumn = {
  status: AdmissionStatus;
  title: string;
}

const allColumns: DashboardColumn[] = [
  { status: 'REVIEW', title: "Pronto para revisar" },
  { status: 'APPROVED', title: "Aprovado" },
  { status: 'REPROVED', title: "Reprovado" },
];

const Collumns = () => {
  const { displayByStatus } = useRegistrations();
  const admissionsPerStatus = displayByStatus();

  return (
    <S.Container>
      {allColumns.map((collum) => {
        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent>
                {admissionsPerStatus[collum.status]?.map((registration) => {
                  return (
                    <RegistrationCard
                      data={registration}
                      key={registration.id}
                    />
                  );
                })}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
