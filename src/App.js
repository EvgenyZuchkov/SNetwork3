import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile
                        state={props.state}
                        newPostText={props.state.profilePage.newPostText}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path='/dialogs/*' element={<Dialogs
                        state={props.state}
                        newMessage={props.state.dialogsPage.newMessage}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>

            </div>
        </div>
    )
}

export default App;
