import axios from 'axios';


//url da api
// https://api.themoviedb.org/3/movie/now_playing?api_key=edd350a52decb97480fdb77c2874a276&language=pt-BR
//base da url : https://api.themoviedb.org/3/

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;