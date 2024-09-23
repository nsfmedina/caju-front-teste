import { useContext, useRef } from 'react'
import { GeneralUIContext } from '~/context/general-ui'
import { GeneralUIModalConfig, GeneralUINotificationConfig } from '~/types/common/general-ui';

export default function useGeneralUI() {
  const notificationRef = useRef<any>(null);
  const {
    modalConfig, 
    isModalOpen, 
    setModalConfig, 
    setIsModalOpen, 
    setNotificationConfig, 
    notificationConfig, 
    isNotificationShown, 
    setIsNotificationShown,
    isUILoading,
    setUILoading
  } = useContext(GeneralUIContext);

  const openModal = (openModalOptions: GeneralUIModalConfig) => {
    setModalConfig({...modalConfig, ...openModalOptions });
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const startLoading = () => setUILoading(true);
  const stopLoading = () => setUILoading(false);

  const showNotification = (notificationOptions: GeneralUINotificationConfig) => {
    clearTimeout(notificationRef.current);

    const {
      type, 
      title, 
      description
    } = notificationOptions;
    setNotificationConfig({...notificationConfig, type, title, description });
    setIsNotificationShown(true);

    notificationRef.current = setTimeout(() => {
      setIsNotificationShown(false);
    }, 4000);
  }

  return { 
    openModal,
    closeModal, 
    modalConfig, 
    isModalOpen, 
    showNotification, 
    isNotificationShown, 
    notificationConfig,
    isUILoading,
    startLoading,
    stopLoading
  }
}
