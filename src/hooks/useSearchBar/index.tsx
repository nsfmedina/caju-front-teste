import { useEffect, useRef, useState } from "react";
import useRegistrations from "../useAdmissions";
import { validateCPF } from "~/utils/validations";
import * as React from "react";
import useGeneralUI from "../useGeneralUI";

export default function useSearchBar() {
  const isValidCpf = useRef(false);
  const [cpf, setCpf] = useState('');
  const { getAdmissionsByCpf, getAdmissions } = useRegistrations();
  const { startLoading, stopLoading } = useGeneralUI();

  const toDigitString = (cpfString: string) => cpfString.replace(/\D/g, '');

  const fetchBasedOnCriteria = () => {
    const cpfValue = toDigitString(cpf);

    if (validateCPF(cpfValue) && !isValidCpf.current) {
      isValidCpf.current = true;
      getAdmissionsByCpf(cpfValue);
    } else if (!validateCPF(cpfValue) && isValidCpf.current) {
      isValidCpf.current = false;
      getAdmissions();
    }
  }

  useEffect(() => {
    fetchBasedOnCriteria();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cpf]);

  const handleSearchBar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event?.target?.value);
  }

  const handleRefetch = async () => {
    startLoading();
    if (validateCPF(cpf)) {
      await getAdmissionsByCpf(cpf);
    } else {
      await getAdmissions();
    }
    stopLoading();
  }

  return {
    handleSearchBar,
    handleRefetch,
    cpf
  }
}
