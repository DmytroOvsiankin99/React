const ADDPOST = "ADD-POST",
    UPDATEPOST = 'UPDATE-POST-AREA',
    ADDDIALOGSMESSAGE = 'ADD-DIALOGS-MESSAGE',
    UPDATEDIALOGS = 'UPDATE-DIALOGS';

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
    callbackFunction(observe) {
        this._rerenderTree = observe; /// объявляем ф-ю вверхнем скоупе, чтоб когда ф-я callbackFunction отработает, 
        //ф-я renderTree не умерла
    },
    _rerenderTree() {
    },
    dispatch(action) {
        if (action.type === ADDPOST) {
            let counter = this._state.profilePage.postData.length;
            let post = {
                id: ++counter,
                message: this._state.profilePage.postValue,
                likeCount: "0"
            };
            this._state.profilePage.postData.push(post);
            this._state.profilePage.postValue = (''); //Clear textarea after add post 
            this._rerenderTree();
        }
        else if (action.type === UPDATEPOST) {
            this._state.profilePage.postValue = action.areaText;
            this._rerenderTree();
        }
        else if (action.type === ADDDIALOGSMESSAGE) {
            let counter = this._state.dialogsPage.messagesData.length;
            let message = {
                id: ++counter,
                message: this._state.dialogsPage.messageValue,
                src: this._state.dialogsPage.messagesData.src
            };
            this._state.dialogsPage.messagesData.push(message);
            this._state.dialogsPage.messageValue = (''); //Clear textarea after add post 
            this._rerenderTree();
        }
        else if (action.type === UPDATEDIALOGS) {
            this._state.dialogsPage.messageValue = action.areaText;
            this._rerenderTree();
        }
    }
}

export const addPostActionCreate = () => ({ type: ADDPOST })

export const updatePostActionCreator = (areaText) =>
    ({
        type: UPDATEPOST,
        areaText: areaText,
    })

export const addMessageActionCreate = () => ({ type: ADDDIALOGSMESSAGE })

export const updateDialogsActionCreator = (areaText) =>
    ({
        type: UPDATEDIALOGS,
        areaText: areaText,
    })

export default store;