import React from 'react'
import Message from './Message/Message'
import DialogItem from './Dialog/DialogItem'
import {updateDialogsActionCreator, addMessageActionCreate} from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state= props.store.getState();

    let dialogsArr = state.dialogsPage.dialogsData.map((el) => <DialogItem id={el.id} dialogName={el.dialogName} dialogImg={el.src} />)

    let messageArr = state.dialogsPage.messagesData.map((el) => <Message id={el.id} message={el.message} src={el.src} classRight={el.classRight} />)

    let send_message = () => {
        props.store.dispatch(addMessageActionCreate())
    }
    
    let updateMessageArea = (areaText) => {
        props.store.dispatch(updateDialogsActionCreator(areaText))
    }

    return (
        <Dialogs messageArr={messageArr} dialogsArr={dialogsArr} send_message={send_message} updateMessageArea={updateMessageArea} messageValue={state.dialogsPage.messageValue}  />
    )
}

export default DialogsContainer;