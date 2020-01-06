export const getResultJson = (url) => {
    fetch(url)
        .then((response) => {
            console.log(response)
        })

        .catch((error) => {
            console.error(error);
        });
}