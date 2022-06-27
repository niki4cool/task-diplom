import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {mapTracks} from "./requests";
import TrackInfo from "./TrackInfo";
import {ITrackInfo} from "./ITrackInfo";
function SearchResults() {

    const [params] = useSearchParams();

    useEffect(() => {
        if (params.get("search")) {
            mapTracks(params.get("search")!).then((trackMatches:any) => {
                if (trackMatches.results.trackmatches.track.length) {
                    setTracks(trackMatches.results.trackmatches.track)
                }
                else {
                    alert(`Нет треков по данному запросу`)
                }
            })
        }
    }, [params.get("search")]);

    const [tracks,setTracks] = useState([]);


    return (
        <div className="content">
            {tracks.map((track:ITrackInfo) => {
                return (
                    <TrackInfo artist={track.artist} name={track.name} image={track.image[2]["#text"]}/>
                )
            })}
        </div>
    )
}

export default SearchResults