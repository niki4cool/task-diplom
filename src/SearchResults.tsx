import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {mapTracks} from "./requests";
import TrackInfo from "./TrackInfo";

function SearchResults() {

    const [params] = useSearchParams();

    useEffect(() => {
        if (params.get("search")) {
            mapTracks(params.get("search")!).then((trackMatches:any) => setTracks(trackMatches.results.trackmatches.track))
        }
    }, [params.get("search")]);

    const [tracks,setTracks] = useState([]);


    return (
        <div className="content">
            {tracks.map((track:any) => {
                return (
                    <TrackInfo artist={track.artist} name={track.name} image={track.image[2]["#text"]}/>
                )
            })}
        </div>
    )
}

export default SearchResults