import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src="https://cdn2.iconfinder.com/data/icons/mobile-apps-10/512/03_landscape_gallery-512.png"/>
            </div>
        </div>
    )
}

export default Header;