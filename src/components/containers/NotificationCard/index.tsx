import { HiCheckCircle, HiXCircle } from 'react-icons/hi'
import * as S from './styles'
import useGeneralUI from '~/hooks/useGeneralUI'

export default function NotificationCard() {
  const { notificationConfig } = useGeneralUI();

  const renderIcon = () => notificationConfig.type === "success" ? <HiCheckCircle /> : <HiXCircle />

  return (
    <S.NotificationCardWrapper $type={notificationConfig.type}>
      {renderIcon()}
      <div>
        <S.NotificationCardTitle>{notificationConfig.title}</S.NotificationCardTitle>
        <S.notificationCardDescription>{notificationConfig.description}</S.notificationCardDescription>
      </div>
    </S.NotificationCardWrapper>
  )
}
