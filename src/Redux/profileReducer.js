const ADDPOST = "ADD-POST",
    UPDATEPOST = 'UPDATE-POST-AREA';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADDPOST:
            let counter = state.postData.length; //обращаемся к параметру state, а не к _state в store
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