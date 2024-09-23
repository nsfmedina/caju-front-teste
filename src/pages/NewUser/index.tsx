import TextField from "~/components/common/TextField";
import * as S from "./styles";
import Button from "~/components/common/Buttons";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton } from "~/components/common/Buttons/IconButton";
import { useHistory } from "react-router-dom";
import routes from "~/router/routes";
import { useForm } from "react-hook-form";
import { validateCPF, validateEmail, validateFullName } from "~/utils/validations";
import useRegistrations from "~/hooks/useAdmissions";
import { AdmissionEntry, NewAdmission } from "~/interfaces/common/admission";

const NewUserPage = () => {
  const { register, handleSubmit, formState } = useForm<NewAdmission>();
  const { createAdmission } = useRegistrations();
  const history = useHistory();
  
  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const addNewUser = async (data: NewAdmission) => {
    const { cpf, fullName, admissionDate, email } = data;
    const payload: AdmissionEntry = {
      admissionDate: new Date(admissionDate).toLocaleDateString("pt-BR"),
      email,
      cpf: cpf.replace(/\D/g, ''),
      employeeName: fullName,
      status: "REVIEW"
    }
    
    await createAdmission(payload, () => {
      goToHome();
    });
  }

  return (
    <S.Container>
      <form onSubmit={handleSubmit(addNewUser)}>
        <S.Card>
          <IconButton onClick={() => goToHome()} aria-label="back">
            <HiOutlineArrowLeft size={24} />
          </IconButton>
          <TextField 
            register={register} 
            name="fullName" 
            placeholder="Nome" 
            label="Nome" 
            error={formState.errors.fullName && "Insira seu nome completo."}
            formconfig={{
              // pattern: /^[^\d][a-zA-Z]*\s+[a-zA-Z]+.*$/
              validate: validateFullName,
              required: true
            }}
           />
          <TextField 
            register={register}
            error={formState.errors.email && "Insira um endereço de email válido."}
            name="email" 
            placeholder="Email" 
            label="Email" 
            type="email"
            formconfig={{
              validate: validateEmail,
              required: true
            }}
          />
          <TextField 
            register={register} 
            name="cpf" 
            placeholder="CPF" 
            label="CPF" 
            mask="999.999.999-99"
            error={formState.errors.cpf && "Insira um CPF válido."}
            formconfig={{
              validate: validateCPF,
              required: true
            }}
          />
          <TextField 
            register={register} 
            name="admissionDate" 
            label="Data de admissão" 
            type="date"
            error={formState.errors.admissionDate && "Por favor, selecione uma data de admissão válida."}
            formconfig={{
              required: true
            }}
          />
          <Button aria-label="submit" type="submit">Cadastrar</Button>
        </S.Card>
      </form>
    </S.Container>
  );
};

export default NewUserPage;
