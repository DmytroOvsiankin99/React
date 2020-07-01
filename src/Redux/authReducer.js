const SET_USER_DATA = "SET-USER-DATA";


let initialState = {  //инициализируем наш дефолтный state
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return { 
                ...state,
                ...action.data,
                isAuth: true
            }
        default: return state; //Если в case не нашлось нужного нам свойства 
    }
}

export const setAuthUserData = (UserId, email, login) =>({type: SET_USER_DATA, data: {UserId, email, login}})
export default authReducer;
