import React from "react";
import s from "./Sidebar.module.css"


const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
                <img src={props.avatar}/>
                <a href="#">{props.name}</a>
        </div>
    )
}

export default Sidebar;