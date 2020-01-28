const Actions = {
    registTwitterList(value) {
        return {
            type: 'REGISTTWITTERLIST',
            value,
        }
    },
    registYoutubeList(value) {
        return {
            type: 'REGISTYOUTUBELIST',
            value,
        }
    },

    changeIconTwitter() {
        return {
            type: 'CHANGEICONTWITTER',
        }
    },
    changeIconYoutube() {
        return {
            type: 'CHANGEICONYOUTUBE',
        }
    },

}
export default Actions