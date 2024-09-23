import axios from "axios"
import { ENDPOINTS } from "~/constants/endpoints"
import useRegistrations from "../useAdmissions";
import { Admission } from "~/interfaces/common/admission";
import { AdmissionStatus } from "~/types/common/admission";
import { useState } from "react";
import useGeneralUI from "../useGeneralUI";

export default function useAdmissionCard() {
  const { admissions, updateAdmission, deleteAdmission } = useRegistrations();
  const { showNotification } = useGeneralUI();
  const [isLoading, setLoading] = useState(false);
  
  const updateRegistry = async (admission: Admission, action: AdmissionStatus) => {
    try {
      setLoading(true);

      const id = admission.id;
      const response = await axios.put(`${ENDPOINTS.PUT_REGISTRATIONS}/${id}`, {
        ...admissions.find((item: Admission) => item.id === id),
        status: action
      });
      updateAdmission(response.data);

      showNotification({
        type: "success",
        title: "Registro atualizado!",
        description: "O registro foi atualizado com sucesso!"
      });
    } catch(error) {
      showNotification({
        type: "error",
        title: "Oops!",
        description: "Houve um problema durante atualização do registro. Tente novamente mais tarde."
      });
    } finally {
      setLoading(false);
    }
  }

  const deleteRegistry = async (id: String) => {
    try {
      setLoading(true);

      const response = await axios.delete(`${ENDPOINTS.DELETE_REGISTRATIONS}/${id}`);
      deleteAdmission(response.data.id);

      showNotification({
        type: "success",
        title: "Remoção atualizado!",
        description: "O registro foi removido com sucesso!"
      });
    } catch (error) {
      showNotification({
        type: "error",
        title: "Oops!",
        description: "Houve um problema durante a remoção do registro. Tente novamente mais tarde."
      });
    } finally {
      setLoading(false);
    }
  }
  
  return {
    isLoading,
    updateRegistry,
    deleteRegistry
  }
}
