import React, {useEffect, useState} from "react";
import {mapLikedTracks} from "./requests";
import LikedTrackInfo from "./LikedTrackInfo";

function LikedTracks() {

    const [tracks,setTracks] = useState([]);

    useEffect(() => {
        mapLikedTracks().then((track:any) => setTracks(track.lovedtracks.track))
    }, []);

    return (
        <div className="content">
            {tracks.map((track:any) => {
                return (
                    <LikedTrackInfo image={track.image[2]["#text"]} artist={track.artist.name} name={track.name}/>
                )
            })}
        </div>
    )
}

export default LikedTracks