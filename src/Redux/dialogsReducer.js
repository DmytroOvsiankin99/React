const ADDDIALOGSMESSAGE = 'ADD-DIALOGS-MESSAGE',
    UPDATEDIALOGS = 'UPDATE-DIALOGS';


let initialState = {
    dialogsData: [
        { id: 1, dialogName: "Dima", src: "https://i.pinimg.com/originals/f1/bf/8d/f1bf8dfd265ba3d536667f5ad826c9c5.png" },
        { id: 2, dialogName: "Sasha", src: "https://i.insider.com/5e223467b6d52d35156b89ac?width=1100&format=jpeg&auto=webp" },
        { id: 3, dialogName: "Nikita", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
        { id: 4, dialogName: "Sergei", src: "https://b1.filmpro.ru/c/17488.700xp.jpg" },
        { id: 5, dialogName: "Maria", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" },
    ],
    messagesData: [
        { id: 1, message: "Hi", src: "https://i.pinimg.com/originals/f1/bf/8d/f1bf8dfd265ba3d536667f5ad826c9c5.png" },
        { id: 2, message: "What's up?", src: "https://i.pinimg.com/originals/f1/bf/8d/f1bf8dfd265ba3d536667f5ad826c9c5.png" },
        { id: 3, message: "I'm fine:)", classRight: "text-right", src: "https://lh3.googleusercontent.com/proxy/JZCNlpFC7MnNzhmdATSsZiPlEEmeZ_6dCCDb6kcqL_0DIYjf8x4ggAlcahUwluUoK-CSf7R_UL6xgcafOPXyHrvBY19aE8z1BUGHs1vz6z0IMOoM4mg7cwQU2btsoppfnOGtgg" },
    ],
    messageValue: '',
}

const dialogsReducer = (state  = initialState, action) => {
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