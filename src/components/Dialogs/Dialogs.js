import React from 'react';
import mod from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './Dialog/DialogItem';

const Dialogs = (props) => {

    let dialogsArr = props.dialogsData.map((el) => <DialogItem id={el.id} dialogName={el.dialogName} dialogImg={el.src} />)

    let messageArr = props.messagesData.map((el) => <Message id={el.id} message={el.message} src={el.src} classRight={el.classRight} />)

    let save_message = React.createRef();

    let send_message = () =>{
        let mes = save_message.current.value;
    }

    return (
        <div className={mod.dialogs_wrapper}>
            <div className={mod.messages_wrapper}>
                <ul>
                    {dialogsArr}
                </ul>
            </div>
            <div className={mod.answer_wrapper}>
                <ul>
                    {messageArr}
                </ul>
                <div className={mod.send_message_wrap}>
                    <textarea ref={save_message}> </textarea>
                    <button onClick={send_message}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;