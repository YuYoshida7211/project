export const getResultJson = (url) => {
    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
        })
        .catch((error) => {
            console.error(error);
        });
}