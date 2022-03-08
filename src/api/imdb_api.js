
const apikey = 'cba33f165f094b795e728b79f3e62260';
const trendingApi = 'https://api.themoviedb.org/3/trending/all/day?api_key=' + apikey;
const popularApi = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apikey;
const tvseasonApi = 'https://api.themoviedb.org/3/tv/popular?api_key=' + apikey;
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

export default {
    trendingApi : trendingApi,
    imageBaseUrl : imageBaseUrl,
    popularApi : popularApi,
    tvseasonApi : tvseasonApi
}