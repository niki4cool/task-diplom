export interface ITrackInfo {
    artist: string,
    name: string,
    image: Array<ImgObj>
}

export interface ILikedTrackInfo {
    artist: {
        name:string
    },
    name: string,
    image: Array<ImgObj>
}

interface ImgObj {
    "#text": string,
    "size": string
}