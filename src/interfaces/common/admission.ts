import { AdmissionStatus } from "~/types/common/admission";

export interface NewAdmission {
    fullName: string;
    cpf: string;
    email: string;
    admissionDate: string;
}

export interface AdmissionEntry {
    admissionDate: string;
    email: string;
    employeeName: string;
    status: AdmissionStatus;
    cpf: string;
}

export interface Admission extends AdmissionEntry {
    id: string;
}

export interface AdmissionsPerStatus {
    REVIEW: Admission[];
    APPROVED: Admission[];
    REPROVED: Admission[];
}