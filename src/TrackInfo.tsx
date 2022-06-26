import React, {useState} from "react";
import like from './images/like.png'
import {likeTrack} from "./requests";

function TrackInfo(props:any) {

    const [liked,setLiked] = useState(false);

    return (
        <div className='card'>
            <img className='card_image' src={props.image}/>
            <p className='card_text'>{props.artist}</p>
            <p className='card_text'>{props.name}</p>
            { !liked &&
                <img className='card_like' src={like}
                     onClick={() => {
                         likeTrack(props.name,props.artist);
                         setLiked(true)
                     }}/>
            }
        </div>
    )
}

export default TrackInfo