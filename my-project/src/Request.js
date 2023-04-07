const key =process.env.REACT_APP_FIREBASE_

const request = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:  `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestLatest:`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestUpcoming:`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`


}

export default request;