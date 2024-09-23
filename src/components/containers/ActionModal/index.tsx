import Button from '~/components/common/Buttons'
import * as S from './styles'
import useGeneralUI from '~/hooks/useGeneralUI';

export default function ActionModal() {
  const { modalConfig, closeModal } = useGeneralUI();

  const handleConfirm = () => {
    modalConfig.onConfirm();
    closeModal();
  }

  const handleCancel = () => {
    closeModal();
  }

  return (
    <S.ActionModalOverlay>
      <S.ActionModalContainer>
        <S.ActionModalTitle>{modalConfig.title}</S.ActionModalTitle>
        <S.ActionModalDescription>{modalConfig.subtitle}</S.ActionModalDescription>
        <S.ActionModalButtonGrouper>  
          <Button onClick={handleCancel} $type="error">Cancelar</Button>
          <Button onClick={handleConfirm} $type="success">Confirmar</Button>
        </S.ActionModalButtonGrouper>
      </S.ActionModalContainer>
    </S.ActionModalOverlay>
  )
}
