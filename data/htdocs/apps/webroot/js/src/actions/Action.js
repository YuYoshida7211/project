const Actions = {
    registTwitterList(value) {
        return {
            type: 'REGISTTWITTERLIST',
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