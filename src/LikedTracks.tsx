import React, {useEffect, useState} from "react";
import {mapTracks} from "./requests";
import LikedTrackInfo from "./LikedTrackInfo";
import {ILikedTrackInfo} from "./ITrackInfo";

function LikedTracks() {

    const [tracks,setTracks] = useState([]);

    useEffect(() => {
        mapTracks(null).then((track:any) => setTracks(track.lovedtracks.track))
    }, []);

    return (
        <div className="content">
            {tracks.map((track:ILikedTrackInfo) => {
                return (
                    <LikedTrackInfo image={track.image[2]["#text"]} artist={track.artist.name} name={track.name}/>
                )
            })}
        </div>
    )
}

export default LikedTracks