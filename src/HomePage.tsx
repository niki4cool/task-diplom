import React from "react";
import album_pic from './images/album_pic.jpg'

function HomePage() {
    return (
        <main className="content">
            <div className="album">
                <img className="album_pic" src={album_pic}/>
                    <ul className="album_info">
                        <li className="album_made_for"> MADE FOR LUAN</li>
                        <li className="album_mix"> Daily Mix 1</li>
                        <li className="album_description"> Your favourite music.</li>
                        <li className="album_description"> Featuring Son Tung M-TP, Vu, Tien Tien and more.</li>
                        <br/>
                        <li className="album_description"> Made for Luan Nguyen by Spotify · Endless Mix</li>
                        <li className="track_musician">
                            <a href="/">
                                <div className="play_button">Play</div>
                            </a>
                            <a href="/"><span className="button_more">...</span></a>
                        </li>
                    </ul>
            </div>
            <div className="tracks">
                <ul className="tracks_list">
                    <li className="track_top">Title</li>
                    <hr className="hr_color"/>
                    <li className="track">Intro: Sau 03 Nam</li>
                    <li className="track">Bai Check</li>
                    <li className="track">Em Dao</li>
                    <li className="track">Tha Vao</li>
                    <li className="track_green">Tim (Lost)</li>
                    <li className="track">Mot The Goi</li>
                    <li className="track">Pho Jon</li>
                    <li className="track">Tinh Yen</li>
                    <li className="track">Color</li>
                    <li className="track">Red Dot</li>
                    <li className="track">TTT</li>
                </ul>
                <ul className="tracks_list">
                    <li className="track_top">Artist</li>
                    <hr className="hr_color"/>
                    <li className="track">Me</li>
                    <li className="track">AGAJo</li>
                    <li className="track">Yepro</li>
                    <li className="track">All</li>
                    <li className="track_green">Min, Mr A</li>
                    <li className="track">Cody Ten</li>
                    <li className="track">Bali</li>
                    <li className="track">Teeek</li>
                    <li className="track">Greendy</li>
                    <li className="track">Walery</li>
                    <li className="track">TOT SAMIY</li>
                </ul>
                <ul className="tracks_list">
                    <li className="track_top">Album</li>
                    <hr className="hr_color"/>
                    <li className="track">First</li>
                    <li className="track">Second</li>
                    <li className="track">New</li>
                    <li className="track">He</li>
                    <li className="track_green">She</li>
                    <li className="track">Who</li>
                    <li className="track">It</li>
                    <li className="track">Old</li>
                    <li className="track">Him</li>
                    <li className="track">Them</li>
                    <li className="track">Nobody</li>
                </ul>
            </div>
        </main>
    )
}

export default HomePage