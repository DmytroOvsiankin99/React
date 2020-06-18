import React from 'react'
import mod from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './Dialog/DialogItem' 

const Dialogs = (props) => {
    
    

    let dialogsArr = props.dialogsPage.dialogsData.map((el) => <DialogItem id={el.id} dialogName={el.dialogName} dialogImg={el.src} />)

    let messageArr = props.dialogsPage.messagesData.map((el) => <Message id={el.id} message={el.message} src={el.src} classRight={el.classRight} />)


    let send_message = () => {
        props.send_message()
    }
    
    let updateMessageArea = (e) => {
        let areaText = e.target.value; //e - событие , target.value - наша цель == значение 
        props.updateMessageArea(areaText)
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
                    <textarea 
                        onChange={updateMessageArea} 
                        value={props.dialogsPage.messageValue} 
                        className={mod.textareaMessage} 
                        placeholder={'Write your message'}
                        />
                    <button onClick={send_message}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;