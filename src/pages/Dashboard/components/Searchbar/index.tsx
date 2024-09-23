import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Button from "~/components/common/Buttons";
import { IconButton } from "~/components/common/Buttons/IconButton";
import TextField from "~/components/common/TextField";
import routes from "~/router/routes";
import * as S from "./styles";
import useSearchBar from "~/hooks/useSearchBar";

export const SearchBar = () => {
  const history = useHistory();
  const { handleSearchBar, handleRefetch, cpf } = useSearchBar();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };
  
  return (
    <S.Container>
      <TextField 
        name="search"
        mask={"999.999.999-99"} 
        placeholder="Digite um CPF válido"
        value={cpf}
        onChange={handleSearchBar}
        aria-label="search"
      />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={handleRefetch}>
          <HiRefresh />
        </IconButton>
        <Button aria-label="Go to new admission page" onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
