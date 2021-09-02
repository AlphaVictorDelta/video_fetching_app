import axios from 'axios';

const KEY = 'AIzaSyC4bB9_XKrzfqt1aIY3yhA2ME_PBDA-rao';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
