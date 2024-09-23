const { VITE_API_BASE_URL } = import.meta.env;

export const ENDPOINTS = {
    GET_REGISTRATIONS: `${VITE_API_BASE_URL}/registrations`,
    POST_REGISTRATIONS: `${VITE_API_BASE_URL}/registrations`,
    PUT_REGISTRATIONS: `${VITE_API_BASE_URL}/registrations`,
    DELETE_REGISTRATIONS: `${VITE_API_BASE_URL}/registrations`,
}