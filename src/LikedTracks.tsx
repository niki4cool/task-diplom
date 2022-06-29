import React, {useEffect, useState} from "react";
import {mapTracks} from "./requests";
import LikedTrackInfo from "./LikedTrackInfo";
import {ILikedTrackInfo, ITrackLikedList} from "./ITrackInfo";

function LikedTracks() {

    const [tracks,setTracks] = useState<ILikedTrackInfo[]>([]);

    useEffect(() => {
        mapTracks(null).then((track:ITrackLikedList) =>
        {
            if (!track.hasOwnProperty('error')) {
                setTracks(track.lovedtracks.track)
            }
            else {
                alert(`Ошибка запроса ${track.message}`)
                throw new Error("Ошибка запроса")
            }
        })
    }, []);

    return (
        <div className="content">
            {tracks.map((track:ILikedTrackInfo) => {
                return (
                    <LikedTrackInfo key={`${track.mbid}${track.url}`} image={track.image[2]["#text"]} artist={track.artist.name} name={track.name}/>
                )
            })}
        </div>
    )
}

export default LikedTracks