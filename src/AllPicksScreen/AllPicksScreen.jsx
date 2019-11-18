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
    bowlPicks.map(person => person.picks).map(picks => picks[id]);
}

const AllPicksScreen = () => {
    const [bowls, setBowls] = useState([]);
    const [picks, setPicks] = useState([]);

    useEffect(() => {
        mockBowlCall().then(bowls => setBowls(bowls));
    }, []);

    useEffect(() => {
        mockPicksCall().then(picks => setPicks(picks));
    })

    if (!bowls.length || !picks.length) {
        return <p>LOADING</p>;
    }
    return <AllPicksTable bowls={bowls} picks={picks} />
}

export default AllPicksScreen;