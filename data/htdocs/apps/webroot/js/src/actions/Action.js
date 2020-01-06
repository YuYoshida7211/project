const Actions = {
    registResultJson(value) {
        return {
            type: 'REGISTRESULTJSON',
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