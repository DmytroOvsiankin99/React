const ADDPOST = "ADD-POST",
    UPDATEPOST = 'UPDATE-POST-AREA';

let initialState = {  //инициализируем наш дефолтный state
    postData: [
        { id: 1, message: 'Hi', likeCount: "20" },
        { id: 2, message: 'I\'m okay', likeCount: "10" },
    ],
    postValue: ''
}

const profileReducer = ( state = initialState, action ) => { //state = initialState - значение по умолчанию, 
    //чтоб что-то возвращалось в наш state в redux
    switch (action.type) {
        case ADDPOST:
            let counter = state.postData.length; //обращаемся к параметру функции state, а не к _state в store
            let post = {
                id: ++counter,
                message: state.postValue,
                likeCount: "0"
            };
            state.postData.push(post);
            state.postValue = (''); //Clear textarea after add post 
            return state;  //делаем return вместо break, ибо при вызове return ф-я перестаёт работать

        case UPDATEPOST:
            state.postValue = action.areaText;
            return state;

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