import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = (props) => {
    let friendsEl = props.state.map(f => <Sidebar name={f.name} avatar={f.avatar}/>)

    return (
        <div className={s.nav}>

            <div>
                <div>
                    <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
                </div>
            </div>
            <div className={s.sidebar}>
                <div className={s.name}>
                    <b>Friends online</b>
                </div>
                <div className={s.sidebarItems}>
                    {friendsEl}
                </div>
            </div>

        </div>
    )
}

export default Navbar;