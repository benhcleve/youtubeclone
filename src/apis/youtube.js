import axios from 'axios';

const KEY = 'AIzaSyBLl8-N7fdfWMLt6S4mg2U_wgaVyHPOh5I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});