import axios from "axios";
import { useContext } from "react";
import { ENDPOINTS } from "~/constants/endpoints";
import { AdmissionsContext } from "~/context/admissions";
import { Admission, AdmissionEntry, AdmissionsPerStatus } from "~/interfaces/common/admission";
import useGeneralUI from "../useGeneralUI";

export default function useAdmissions() {
  const { showNotification, startLoading, stopLoading } = useGeneralUI();
  const { admissions, setAdmissions, updateAdmission, deleteAdmission } = useContext(AdmissionsContext);

  const getAdmissions = async () => {
    try {
      const response = await axios.get(ENDPOINTS.GET_REGISTRATIONS);
      setAdmissions(response.data);
    } catch (error) {
      showNotification({ 
        type: "error", 
        title: "Oops!", 
        description: `Houve um problema ao obter os registros.`
      });
    }
  }

  const getAdmissionsByCpf = async (cpf:string = '') => {
    try {
      const response = await axios.get(ENDPOINTS.GET_REGISTRATIONS, {
        params: {
          cpf
        }
      });
      setAdmissions(response.data);
    } catch (error) {
      showNotification({ 
        type: "error", 
        title: "Oops!", 
        description: `Houve um problema ao obter os registros com o CPF informado`
      });
    }
  }

  const createAdmission = async (AdmissionEntry: AdmissionEntry, onSuccess = () => {}, onFailure = () => {}) => {
    try {
      startLoading();
      const response = await axios.post<Admission>(ENDPOINTS.POST_REGISTRATIONS, {
        ...AdmissionEntry
      });
      showNotification({ 
        type: "success", 
        title: "Novo registro adicionado", 
        description: `A admissão de ${response.data.employeeName} foi incluída com sucesso.`
      });
      onSuccess();
    } catch (error) {
      showNotification({ 
        type: "error", 
        title: "Oops!", 
        description: `Houve um problema ao criar um novo registro`
      });
      onFailure();
    } finally {
      stopLoading();
    }
  }

  const displayByStatus = (): AdmissionsPerStatus => {
    const admissionsPerStatus: AdmissionsPerStatus = {
      REVIEW: [],
      APPROVED: [],
      REPROVED: []
    };
    
    admissions.forEach((item: Admission)  => {
      if (!admissionsPerStatus[item.status]) {
        admissionsPerStatus[item.status] = [];
      }
      admissionsPerStatus[item.status].push(item);
    });

    return admissionsPerStatus;
  }
  
  return { 
    admissions, 
    getAdmissions, 
    getAdmissionsByCpf,
    displayByStatus,
    createAdmission,
    updateAdmission,
    deleteAdmission
  }
}
