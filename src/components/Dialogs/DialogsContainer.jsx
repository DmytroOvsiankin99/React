import React from 'react'
import { updateDialogsActionCreator, addMessageActionCreate } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) =>{
    return {
        dialogsPage : state.dialogsPage,//При изменении state.profilePage мы перерисуем нашу компоненту, 
        //потому что connect подписан на store в index.js (<Provide>), так же с диспатчем.
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        send_message: () => { dispatch(addMessageActionCreate()) },
        updateMessageArea: (areaText) => {  dispatch(updateDialogsActionCreator(areaText)) },
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) ;

export default DialogsContainer;