const ADDDIALOGSMESSAGE = 'ADD-DIALOGS-MESSAGE',
    UPDATEDIALOGS = 'UPDATE-DIALOGS';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADDDIALOGSMESSAGE:
            let counter = state.messagesData.length;  //обращаемся к параметру state
            let message = {
                id: ++counter,
                message: state.messageValue,
                src: state.messagesData.src
            };
            state.messagesData.push(message);
            state.messageValue = (''); //Clear textarea after add post 
            return state;  //делаем return вместо break, ибо при вызове return ф-я перестаёт работать

        case UPDATEDIALOGS:
            state.messageValue = action.areaText;
            return state;

        default: return state; //Если в case не нашлось нужного нам свойства 
    }   
}

export default dialogsReducer;
export const addMessageActionCreate = () => ({ type: ADDDIALOGSMESSAGE })
export const updateDialogsActionCreator = (areaText) =>
    ({
        type: UPDATEDIALOGS,
        areaText: areaText,
    })