import { createContext, useState, ReactNode } from "react";
import { Admission } from "~/interfaces/common/admission";

type AdmissionsContextType = {
    admissions: Admission[];
    setAdmissions: (admissions: Admission[]) => void;
    updateAdmission: (param: Admission) => void;
    deleteAdmission: (id: string) => void;
}

export const AdmissionsContext = createContext<AdmissionsContextType>({} as AdmissionsContextType);

export const AdmissionsProvider = ({ children }: { children: ReactNode }) => {
    const [admissions, setAdmissionsData] = useState<Admission[]>([]);

    const setAdmissions = (admissions: Admission[]) => {
        setAdmissionsData([...admissions]);
    };

    const updateAdmission = (payload: Admission) => {
        const updatedAdmissions = admissions.map(item => payload.id === item.id ? payload : item);
        setAdmissions(updatedAdmissions);
    }

    const deleteAdmission = (id: String) => {
        const updatedAdmissions = admissions.filter(item => item.id !== id);
        setAdmissions(updatedAdmissions);
    }

    return (
        <AdmissionsContext.Provider value={{admissions, setAdmissions, updateAdmission, deleteAdmission}}>
            {children}
        </AdmissionsContext.Provider>
    )
}