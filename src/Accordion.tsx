import React from "react";
import home from './images/home.png';
import search from './images/search.png';
import media from './images/media.png';
import artist from './images/artist.jpg'
import {Link} from "react-router-dom";

function Accordion() {
    return (
        <aside className="accordion">
            <ul className="aside_menus">
                <li className="menu home"><img src={home} width="16" height="16"/> Home</li>
                <li className="menu"><img src={search} width="16" height="16"/> Browse</li>
                <li className="menu"><img src={media} width="16" height="16"/> Radio</li>
                <br/>
                    <li className="menu-lib">Your library</li>
            </ul>
            <ul className="aside_offers">
                <li className="offer">Made for you</li>
                <li className="offer">Recently played</li>
                <li className="offer">
                    <Link className='link' to="/liked_tracks">Love songs</Link>
                </li>
                <li className="offer">Albums</li>
                <li className="offer">Artists</li>
                <li className="offer">Podcasts</li>
                <hr className="hr_color"/>
                    <li className="offer">New Playlist</li>
                <hr className="hr_color"/>
            </ul>
            <a><img className="recommended-artist" src={artist}/></a>
        </aside>
    )
}

export default Accordion