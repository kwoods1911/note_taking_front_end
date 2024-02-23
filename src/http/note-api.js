import api from "./api"

const apiPath = import.meta.env.VITE_API_NOTE_PATH

const resource = apiPath + "/notes"
export const allNotes = () => api.get(resource)