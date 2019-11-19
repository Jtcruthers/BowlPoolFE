import React, {useEffect, useState} from 'react';

import bowlApiCall from './bowlgames_apicall';

import AllPicksScreen from './AllPicksScreen.jsx'
import {getPicks} from '../api';


const mockBowlCall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(bowlApiCall)}, 150);
    });
}

const getPicksForGame = (id, bowlPicks) => {
    return bowlPicks.map(person => person.picks).map(picks => picks[id]);
}

const AllPicksScreenLogic = () => {
    const [bowls, setBowls] = useState([]);
    const [picks, setPicks] = useState([]);
    const [picksPerBowl, setPicksPerBowl] = useState({});

    useEffect(() => {
        Promise.all([mockBowlCall(), getPicks()]).then(([bowls, picks]) => {
            const picksPerBowl = {};
            console.log(picks);
            bowls.map(bowl => bowl.id).forEach(id => picksPerBowl[id] = getPicksForGame(id, picks));
            setPicksPerBowl(picksPerBowl);
            setBowls(bowls);
            setPicks(picks);
        })
    }, []);

    if (!bowls.length || !picks.length) {
        return <p>LOADING</p>;
    }
    return <AllPicksScreen bowls={bowls} picks={picks} picksPerBowl={picksPerBowl} />
}

export default AllPicksScreenLogic;