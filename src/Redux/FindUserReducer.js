const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USER = "SET_USER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

let initState = {
    usersData: [],
    pageSize: 6,
    totalCountUsers: 0,
    currentPage: 1,
    isFatching: false,
    followingInProgres: false
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
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state, followingInProgres: action.followingInProgres,
            }

        default: return state;
    }
}

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersData = (users) => ({ type: SET_USER, users });
export const editCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsers = (total) => ({ type: SET_TOTAL_USERS, total: total })
export const setIsFetching = (isFatching) => ({ type: TOGGLE_IS_FETCHING, isFatching })
export const toggleIsFollowing = (followingInProgres) => ({ type: TOGGLE_IS_FOLLOWING, followingInProgres })

export default usersReudcer;