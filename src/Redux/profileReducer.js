const ADDPOST = "ADD-POST",
    UPDATEPOST = 'UPDATE-POST-AREA',
    SETPROFILEUSERS = "SETPROFILEUSERS";
let initialState = {  //инициализируем наш дефолтный state
    postData: [
        { id: 1, message: 'Hi', likeCount: "20" },
        { id: 2, message: 'I\'m okay', likeCount: "10" },
    ],
    postValue: '',
    profile: null
}

const profileReducer = (state = initialState, action) => { //state = initialState - значение по умолчанию, 
    //чтоб что-то возвращалось в наш state в redux
    switch (action.type) {
        case ADDPOST:
            let counter = state.postData.length; //обращаемся к параметру функции state, а не к _state в store
            let post = {
                id: ++counter,
                message: state.postValue,
                likeCount: "0"
            };
            return {
                ...state,//поверхностно копируем state в новый объект чтоб ф-я connetc сравнила новый и старый объект 
                //и в случаии изменений перерисовала DOM
                postData: [...state.postData, post], //Дальше копируем только то, что нам нужно, не тратим память напрасно
                postValue: '',//Clear textarea after add post 
            }
        case UPDATEPOST:
            return {
                ...state,
                postValue: action.areaText
            }
        case SETPROFILEUSERS:
            return {
                ...state,
                profile: action.profile
            }
        default: return state; //Если в case не нашлось нужного нам свойства 
    }
}

export default profileReducer;
export const addPostActionCreate = () => ({ type: ADDPOST })
export const updatePostActionCreator = (areaText) =>
    ({
        type: UPDATEPOST,
        areaText: areaText,
    })
export const setProfileUser = (profile) => ({ type: SETPROFILEUSERS , profile})