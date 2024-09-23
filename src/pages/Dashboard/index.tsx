import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useEffect } from "react";
import useAdmissions from "~/hooks/useAdmissions";

const DashboardPage = () => {
  const { getAdmissions } = useAdmissions();

  useEffect(() => {
    getAdmissions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <S.Container>
        <SearchBar />
        <Collumns />
      </S.Container>
    </>
  );
};
export default DashboardPage;
