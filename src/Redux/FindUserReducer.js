const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USER = "SET_USER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initState = {
    usersData: [],
    pageSize: 6,
    totalCountUsers: 0,
    currentPage: 1,
    isFatching: false
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
                usersData: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage,
            }

        case SET_TOTAL_USERS:
            return {
                ...state, totalCountUsers: action.total,
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFatching: action.isFatching,
            }

        default: return state;
    }
}

export const usersFollowAC = (userID) => ({ type: FOLLOW, userID });
export const usersUnollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersData = (users) => ({ type: SET_USER, users });
export const editCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersAC = (total) => ({ type: SET_TOTAL_USERS, total: total })
export const setIsFetchingAC = (isFatching) => ({ type: TOGGLE_IS_FETCHING, isFatching })

export default usersReudcer;