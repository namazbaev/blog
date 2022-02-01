import { LOGIN, LOGOUT, GET_USER } from '../constants'
const getUser = (data) => {
    return {
        type: GET_USER,
        payload: data
    }
}
const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}
const logout = (data) => {
    return {
        type: LOGOUT,
        payload: data
    }
}
export { login, logout, getUser }