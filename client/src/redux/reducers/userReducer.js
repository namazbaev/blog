
import { LOGIN, LOGOUT, GET_USER } from '../constants'
const initialData = {
    isLogged: false
}
const userReducer = (state = initialData, action) => {
    const type = action.type;
    const payload = action.payload;
    switch (type) {
        case LOGIN:
            return {
                ...state,
                isLogged: payload
            }
        case GET_USER:
            return {
                ...state,
                user: payload.data,
                isLogged: payload.isLogged
            }
        case LOGOUT:
            return {}
        default:
            return state
    }
}
export default userReducer