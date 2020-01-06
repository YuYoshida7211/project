const Actions = {
    init(value) {
        return {
            type: 'GETAPIRESULT',
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