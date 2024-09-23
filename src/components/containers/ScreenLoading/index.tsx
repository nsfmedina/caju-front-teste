import * as S from './styles'
import { HiViewGrid } from 'react-icons/hi'

export default function ScreenLoading() {
  return (
    <S.ScreenLoadingWrapper>
      <S.ScreenLoadingMessage>
        <S.ScreenLoadingIcon>
          <HiViewGrid color='#f3829b' size={32} />
        </S.ScreenLoadingIcon>
        <S.ScreenLoadingText>Aguarde...</S.ScreenLoadingText>
      </S.ScreenLoadingMessage>
    </S.ScreenLoadingWrapper>
  )
}
