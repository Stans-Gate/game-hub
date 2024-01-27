import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1b638cb6015e4fe3b8d1b339554db74c'
    }
})
