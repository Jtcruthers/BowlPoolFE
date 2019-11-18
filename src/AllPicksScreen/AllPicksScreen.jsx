import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import picksApiCall from './picks_apicall';
import bowlApiCall from './bowlgames_apicall';

import AllPicksTable from './AllPicksTable.jsx'


const mockBowlCall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(bowlApiCall)}, 100);
    });
}

const mockPicksCall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(picksApiCall)}, 100);
    });
}


const getPicksForGame = (id, bowlPicks) => {
    return bowlPicks.map(person => person.picks).map(picks => picks[id]);
}

const AllPicksScreen = () => {
    const [bowls, setBowls] = useState([]);
    const [picks, setPicks] = useState([]);
    const [picksPerBowl, setPicksPerBowl] = useState({});

    useEffect(() => {
        Promise.all([mockBowlCall(), mockPicksCall()]).then(([bowls, picks]) => {
            const picksPerBowl = {};
            bowls.map(bowl => bowl.id).forEach(id => picksPerBowl[id] = getPicksForGame(id, picks));
            setPicksPerBowl(picksPerBowl);
            setBowls(bowls);
            setPicks(picks);
        })
    }, []);

    if (!bowls.length || !picks.length) {
        return <p>LOADING</p>;
    }
    return <AllPicksTable bowls={bowls} picks={picks} picksPerBowl={picksPerBowl} />
}

export default AllPicksScreen;