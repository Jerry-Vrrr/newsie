

const goFetch = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=X3Uf8Qouu90Prs7jV8xmkoZxSFs9iyxv')
    .then(response => response.json())
    .catch(err => console.log(err))

}

export {goFetch}