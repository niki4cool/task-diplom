import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {mapTracks} from "./requests";
import TrackInfo from "./TrackInfo";
import {ITrackInfo, ITrackSearchList} from "./ITrackInfo";
function SearchResults() {

    const [params] = useSearchParams();
    const [tracks,setTracks] = useState<ITrackInfo[]>([]);

    useEffect(() => {
        if (params.get("search")) {
            mapTracks(params.get("search")!).then((trackMatches:ITrackSearchList) => {
                if (trackMatches.results.trackmatches.track.length) {
                    setTracks(trackMatches.results.trackmatches.track)
                }
                else {
                    alert(`Нет треков по данному запросу`)
                }
            })
        }
    }, [params.get("search")]);


    return (
        <div className="content">
            {tracks.map((track:ITrackInfo) => {
                return (
                    <TrackInfo key={track.listeners} artist={track.artist} name={track.name} image={track.image[2]["#text"]}/>
                )
            })}
        </div>
    )
}

export default SearchResults