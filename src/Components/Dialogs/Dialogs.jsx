import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageAC, updateMessageTextAC} from "../../Redux/Dialogs-reducer";


const Dialogs = (props) => {

    let state = props.state.dialogsPage

    let dialogsElements = state.dialogsData.map(d => <DialogsItem id={d.id} name={d.name} avatar={d.avatar}/>)
    let messagesElements = state.messagesData.map(m => <Message message={m.message}/>)
    let avatarElements = state.dialogsData.map(a => <img src={a.avatar} />)

    let addMessage = () => {
        props.dispatch(addMessageAC())
    }

    let updateMessageText = (e) => {
        let text = e.target.value
        props.dispatch(updateMessageTextAC(text))
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
                <textarea value={props.newMessage}
                          onChange={updateMessageText}
                />
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}


export default Dialogs;