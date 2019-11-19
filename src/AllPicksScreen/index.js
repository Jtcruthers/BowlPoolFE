import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';

import AllPicksScreen from './AllPicksScreen.jsx'
import {getPicks, getBowlGames} from '../services';


const getPicksForGame = (id, bowlPicks) => {
    return bowlPicks.map(person => person.picks).map(picks => picks[id]);
}

const AllPicksScreenLogic = ({history}) => {
    const [bowls, setBowls] = useState([]);
    const [picks, setPicks] = useState([]);
    const [picksPerBowl, setPicksPerBowl] = useState({});

    useEffect(() => {
        const bowls = getBowlGames();
        getPicks().then(picks => {
            const picksPerBowl = {};
            bowls.map(bowl => bowl.id).forEach(id => picksPerBowl[id] = getPicksForGame(id, picks));
            setPicksPerBowl(picksPerBowl);
            setBowls(bowls);
            setPicks(picks);
        })
    }, []);

    const redirectToSelection = () => history.push('/selection');

    if (!bowls.length || !picks.length) {
        return <p>LOADING</p>;
    }
    return (
        <AllPicksScreen
            bowls={bowls}
            picks={picks}
            picksPerBowl={picksPerBowl}
            redirectToSelection={redirectToSelection} 
        />
    )
}

export default withRouter(AllPicksScreenLogic);