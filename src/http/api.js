import axios from "axios";
// axios.defaults.withXSRFToken = true;
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

// `xsrfHeaderName` is the name of the http header that carries the xsrf token value
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'; // default

// what does this do ?
//ref: https://blog.logrocket.com/understanding-axios-create/
const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    // withXSRFToken: true // <---
})


export default api