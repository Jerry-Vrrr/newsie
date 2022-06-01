

const key = process.env.REACT_APP_API_KEY


const goFetch = (type) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=X3Uf8Qouu90Prs7jV8xmkoZxSFs9iyxv`)
    .then(response => response.json())
    // .then(data => setScience(data.results))
}


// const scienceData = goFetch('science')
export {goFetch}