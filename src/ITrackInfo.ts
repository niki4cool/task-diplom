export interface ITrackInfo {
    artist: string,
    name: string,
    image: Array<ImgObj>
    listeners:number
}

export interface ITrackLikedList {
    lovedtracks:{
        track:ILikedTrackInfo[]
    }
    message:string
}

export interface ITrackSearchList {
    results: {
        trackmatches: {
            track: ITrackInfo[]
        }
    }
}

export interface ILikedTrackInfo {
    artist: {
        name:string
    },
    name: string,
    image: Array<ImgObj>
    mbid: string
    url:string
}

interface ImgObj {
    "#text": string,
    "size": string
}