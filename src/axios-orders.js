import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-app-with-react.firebaseio.com/'
});

export default instance;