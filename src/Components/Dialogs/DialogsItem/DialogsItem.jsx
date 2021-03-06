import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path} className={dialData => dialData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;