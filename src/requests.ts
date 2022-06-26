const md5 = require('md5');

async function mapTracks(input:string) {
    let response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${input}&api_key=808ff72e603e06bd2706ee4ea173de2d&format=json`, {
        method: 'GET'
    });

    return await response.json()
}

async function likeTrack(track:string,artist:string) {
    await fetch(`https://ws.audioscrobbler.com/2.0/`, {
        method: 'POST',
        body: new URLSearchParams({
            'method': 'track.love',
            'api_key': '808ff72e603e06bd2706ee4ea173de2d',
            'sk': 'FC8j4ZNtgqCaAq3kXU1jO4QovPT8zvXY',
            'api_sig': md5(`api_key808ff72e603e06bd2706ee4ea173de2dartist${artist}methodtrack.loveskFC8j4ZNtgqCaAq3kXU1jO4QovPT8zvXYtrack${track}54f141d65be704d8573719d0cf5f5188`),
            'track': track,
            'artist': artist,
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

async function mapLikedTracks() {
    let response = await fetch(`https://ws.audioscrobbler.com/2.0/?api_key=808ff72e603e06bd2706ee4ea173de2d&method=user.getlovedtracks&user=niki44444&format=json`, {
        method: 'GET'
    });

    return await response.json()
}

export {mapTracks,mapLikedTracks,likeTrack}
