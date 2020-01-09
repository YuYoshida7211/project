export const getResultJson = (url, callback) => {
    fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            callback(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
}