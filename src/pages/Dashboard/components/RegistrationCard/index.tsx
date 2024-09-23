import { ButtonSmall } from "~/components/common/Buttons";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import useAdmissionCard from "~/hooks/useAdmissionCard";
import useGeneralUI from "~/hooks/useGeneralUI";
import { Admission } from "~/interfaces/common/admission";

type Props = {
  data: Admission;
};

const RegistrationCard = (props: Props) => {
  const { updateRegistry, deleteRegistry, isLoading } = useAdmissionCard();
  const { openModal } = useGeneralUI();
  const isReviewable = props.data.status === 'REVIEW';

  const handleReprove = () => {
    openModal({
      title: "Reprovar admissão",
      subtitle: `Ao confirmar, a admissão de ${props.data.employeeName} será reprovada. Deseja continuar?`,
      onConfirm: () => {
        updateRegistry(props.data, `REPROVED`)
      }
    })
  }

  const handleApprove = () => {
    openModal({
      title: "Aprovar admissão",
      subtitle: `Ao confirmar, a admissão de ${props.data.employeeName} será aprovada. Deseja continuar?`,
      onConfirm: () => {
        updateRegistry(props.data, `APPROVED`)
      }
    })
  }

  const handleReview = () => {
    openModal({
      title: "Revisar novamente",
      subtitle: `Ao confirmar, a admissão de ${props.data.employeeName} retornará à coluna de Revisão. Deseja continuar?`,
      onConfirm: () => {
        updateRegistry(props.data, `REVIEW`)
      }
    })
  }

  const handleDelete = () => {
    openModal({
      title: "Remover admissão",
      subtitle: `Ao confirmar, a admissão de ${props.data.employeeName} será permanentemente removida. Deseja continuar?`,
      onConfirm: () => {
        deleteRegistry(props.data.id)
      }
    })
  }

  return (
    <S.Card $isLoading={isLoading}>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{props.data.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{props.data.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{props.data.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        {isReviewable && (
          <>
            <ButtonSmall onClick={handleReprove} bgcolor="rgb(255, 145, 154)" >Reprovar</ButtonSmall>
            <ButtonSmall onClick={handleApprove} bgcolor="rgb(155, 229, 155)">Aprovar</ButtonSmall>
          </>  
        )}
        {!isReviewable && (
          <ButtonSmall onClick={handleReview} bgcolor="#ff8858">Revisar novamente</ButtonSmall>
        )}
        <HiOutlineTrash onClick={handleDelete} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
