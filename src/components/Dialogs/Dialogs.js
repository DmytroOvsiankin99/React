import React from 'react'
import mod from './Dialogs.module.css'

const Dialogs = (props) => {
    
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
                    {props.dialogsArr}
                </ul>
            </div>
            <div className={mod.answer_wrapper}>
                <ul>
                    {props.messageArr}
                </ul>
                <div className={mod.send_message_wrap}>
                    <textarea 
                        onChange={updateMessageArea} 
                        value={props.messageValue} 
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