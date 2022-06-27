import md5 from 'md5';

async function mapTracks(input:string | null) {
    try {
        let url;
        if (input) {
            url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${input}&api_key=808ff72e603e06bd2706ee4ea173de2d&format=json`
        } else {
            url = `https://ws.audioscrobbler.com/2.0/?api_key=808ff72e603e06bd2706ee4ea173de2d&method=user.getlovedtracks&user=niki44444&format=json`
        }
        let response = await fetch(url, {
            method: 'GET'
        });
        return response.json()
    }
    catch (e:any) {
        if (e instanceof Error) {
            errorAlert(e)
        }
    }
}

async function likeTrack(track:string,artist:string) {
    try {
        await fetch(`https://ws.audioscrobbler.com/2.0/`, {
            method: 'POST',
            body: new URLSearchParams({
                'api_sig': md5(`api_key808ff72e603e06bd2706ee4ea173de2dartist${artist}methodtrack.loveskFC8j4ZNtgqCaAq3kXU1jO4QovPT8zvXYtrack${track}54f141d65be704d8573719d0cf5f5188`),
                'track': track,
                'artist': artist,
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }
    catch (e:any) {
        if (e instanceof Error) {
            errorAlert(e)
        }
    }
}

function errorAlert(e:any) {
    alert(`Error ${e.code} ${e.message}`);
}


export {mapTracks,likeTrack,errorAlert}
