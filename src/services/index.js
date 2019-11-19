import axios from 'axios';

import bowl_games from './bowl_games';
import bowl_picks from './bowl_picks.json';

const USE_LOCAL = false;

const instance = axios.create({
    baseURL: 'https://i29ctw2ne2.execute-api.us-east-2.amazonaws.com/beta',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
})

export const getBowlGames = () => {
    return bowl_games;
}

export const savePicks = async picks => {
    if (USE_LOCAL) {
        return bowl_picks;
    }
    return await instance.post('/save_picks', picks);
}

export const getPicks = async () => {
    if (USE_LOCAL) {
        return bowl_picks;
    }
    const response = await instance.get('get-picks');
    return response.data;
}