import React from "react";
import like from './images/like.png';
import shuffle from './images/shuffle.png';
import playback from './images/play-back.png';
import playbutton from './images/play-button.png';
import playforward from './images/play-forward.png';
import replay from './images/replay.png';
import time from './images/time.png';
import mic from './images/mic.png'
import list from './images/list.png';
import devices from './images/devices.png';
import volume from './images/volume.png';
import volume1 from './images/volume1.png';
import open from './images/open.png'


function Footer() {
    return (
        <footer className="footer">
            <div className="footer_cover">
                <ul className="footer_track">
                    <li className="track_name"> Tim (Lost) [feat. Mr. A.]</li>
                    <li className="track_musician"> Min, Mr A</li>
                </ul>
                <img className="like_button" src={like} width="16" height="16"/>
            </div>
            <div>
                <ul className="footer_buttons">
                    <li className="footer_play">
                        <img className="footer_button" src={shuffle} width="20" height="20"/>
                        <img className="footer_button" src={playback} width="20" height="20"/>
                        <img className="footer_button" src={playbutton} width="25" height="25"/>
                        <img className="footer_button" src={playforward} width="20" height="20"/>
                        <img className="footer_button" src={replay} width="20" height="20"/>
                    </li>
                    <li className="footer_timecode">
                        <div>
                            <span className="footer_time">2:34</span>
                            <img className="time" src={time}/>
                            <span className="footer_time">4:40</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="footer_functions">
                <img src={mic} className="footer_function" width="20" height="20"/>
                <img src={list} className="footer_function" width="20" height="20"/>
                <img src={devices} className="footer_function" width="20" height="20"/>
                <img src={volume} className="footer_function" width="20" height="20"/>
                <img src={volume1} className="footer_function" width="64" height="20"/>
                <img src={open} className="footer_function" width="20" height="20"/>
            </div>
        </footer>
    )
}

export default Footer