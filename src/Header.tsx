import React, {useState} from "react";
import dots from './images/dots.png'
import logo from './images/logo.png'
import {useNavigate} from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const [input, setInput] = useState('');

    function onKeyPressHandler(e:React.KeyboardEvent<HTMLInputElement>) {
        if (e.charCode === 13) {
            navigate(`/track_search?search=${input}`)
        }
    }

    function inputEventHandler(e:React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    }

    return (
        <header className="header">
            <img src={dots} width="27" height="5"/>
            <a href="#" className="header_logo link">
                <img src={logo} alt="Логотип" width="32" height="32"/>
                <h1 className="hearer_title">Spotify</h1>
            </a>
            <input type="search" className="header_search" value={input} onChange={e => inputEventHandler(e)} onKeyPress={e => onKeyPressHandler(e)} placeholder="Исполнитель, трек, или подкаст" />
                <nav className="header_navigation">
                    <a href="/" className="link">Home</a>
                    <a href="/" className="link">Radio</a>
                </nav>
        </header>
    )
}

export default Header