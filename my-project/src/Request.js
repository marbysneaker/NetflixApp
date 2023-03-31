const key ='247902069a8549dd05461cd75917c0c7'

const request = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:  `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestHorror:`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestUpcoming:`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`


}

export default request;