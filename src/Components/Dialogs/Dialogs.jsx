import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.state.dialogsPage
    let newMessageEl = React.createRef()

    let dialogsElements = state.dialogsData.map(d => <DialogsItem id={d.id} name={d.name} avatar={d.avatar}/>)
    let messagesElements = state.messagesData.map(m => <Message message={m.message}/>)
    let avatarElements = state.dialogsData.map(a => <img src={a.avatar} />)

    let addMessage = () => {
        props.addMessage()
    }

    let updateMessageText = () => {
        let text = newMessageEl.current.value
        props.updateMessageText(text)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.avatar}>
                {avatarElements}
            </div>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.sendBlock}>
                <textarea ref={newMessageEl}
                          value={props.newMessage}
                          onChange={updateMessageText}
                />
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}


export default Dialogs;