import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://i29ctw2ne2.execute-api.us-east-2.amazonaws.com/beta',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
})

export const savePicks = async picks => {
    return await instance.post('/save_picks', picks);
}

export const getPicks = async () => {
    return await instance.get('get-picks');
}