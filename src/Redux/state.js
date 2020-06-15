import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi', likeCount: "20" },
                { id: 2, message: 'I\'m okay', likeCount: "10" },
            ],
            postValue: ''
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber(observe) {
        this._renderTree = observe; /// объявляем ф-ю вверхнем скоупе, чтоб когда ф-я callbackFunction отработает, 
        //ф-я _callSubscriber не умерла
    },
    _renderTree() {
    },
    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage , action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage , action);
        
        this._renderTree();
    }
}

export default store;