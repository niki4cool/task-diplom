import React from "react";

function LikedTrackInfo(props:any) {
    return (
        <div className='card'>
            <img className='card_image' src={props.image}/>
            <p className='card_text'>{props.artist}</p>
            <p className='card_text'>{props.name}</p>
        </div>
    )
}

export default LikedTrackInfo