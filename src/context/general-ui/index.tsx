import { createContext, ReactNode, useState } from "react";
import { GeneralUIModalConfig, GeneralUINotificationConfig } from "~/types/common/general-ui";

type GeneralUIContextProps = {
    isUILoading: boolean;
    isModalOpen: boolean;
    isNotificationShown: boolean;
    modalConfig: GeneralUIModalConfig;
    notificationConfig: GeneralUINotificationConfig;
    setIsModalOpen: (param: boolean) => void;
    setIsNotificationShown: (param: boolean) => void;
    setUILoading: (param: boolean) => void;
    setModalConfig: (param: GeneralUIModalConfig) => void;
    setNotificationConfig: (param: GeneralUINotificationConfig) => void;
}

export const GeneralUIContext = createContext<GeneralUIContextProps>({} as GeneralUIContextProps);

export const GeneralUIProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNotificationShown, setIsNotificationShown] = useState(false);
    const [isUILoading, setUILoading] = useState(false);
    const [modalConfig, setModalConfig] = useState<GeneralUIModalConfig>({
        title: '',
        subtitle: '',
        onConfirm: () => {}
    });
    const [notificationConfig, setNotificationConfig] = useState<GeneralUINotificationConfig>({
        type: "error",
        title: '',
        description: ''
    })

    return (
        <GeneralUIContext.Provider value={{ 
            isModalOpen, 
            setIsModalOpen, 
            modalConfig, 
            setModalConfig, 
            notificationConfig, 
            setNotificationConfig, 
            isNotificationShown, 
            setIsNotificationShown,
            isUILoading,
            setUILoading
        }}>
            {children}
        </GeneralUIContext.Provider>
    )
}