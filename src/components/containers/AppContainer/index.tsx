import { Header } from '~/components/common/Header'
import useGeneralUI from '~/hooks/useGeneralUI'
import ActionModal from '~/components/containers/ActionModal'
import Router from '~/router'
import NotificationCard from '../NotificationCard';
import ScreenLoading from '../ScreenLoading';

export default function AppContainer() {
  const { isModalOpen, isNotificationShown, isUILoading } = useGeneralUI();

  return (
    <>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Router />
      {isModalOpen && <ActionModal />}
      {isNotificationShown && <NotificationCard />}
      {isUILoading && <ScreenLoading />}
    </>
  )
}
