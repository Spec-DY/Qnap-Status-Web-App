import axios from "axios";
const REACT_API = process.env.REACT_APP_PYTHON_SERVER
const STATES_API = `${REACT_API}/api/qnap_status`


export async function login(credentials:any) {
    const response = await axios.post(`${STATES_API}/login`, credentials, {withCredentials:true})
    return response
}

export async function fetchSystemStatus() {
    const response = await axios.get(`${STATES_API}/systemstatus`, {withCredentials:true})
    return response
}

