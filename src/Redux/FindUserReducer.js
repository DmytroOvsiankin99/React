const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USER = "SET_USER";

let initState = {
    usersData: []
}

let usersReudcer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((el) => {
                    if (el.id === action.userID) {
                        return { ...el, followed: true }
                    }
                    return el; //если не нужно делать копию, возвращаем тот же объект
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((el) => {
                    if (el.id === action.userID) {
                        return { ...el, followed: false }
                    }
                    return el; //если не нужно делать копию, возвращаем тот же объект
                }),
            }
        case SET_USER:
            return { 
                ...state, 
                usersData: [ ...action.users ]
            }
        default: return state;
    }
}

export default usersReudcer;
export const usersFollowAC = (userID) => ({ type: FOLLOW, userID });
export const usersUnollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersData = (users) => ({ type: SET_USER, users });