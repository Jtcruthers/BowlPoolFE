import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import BowlInformation from './BowlInformation';
import BowlSelection from './BowlSelection';
import TeamDisplay from './TeamDisplay';
import apiCall from './apicall';

const BowlSelectionItem = styled.div`
    width: 100%;
    min-height: 100%;
`;

const BowlSelectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: 20px 10%;
`;

const mockAPICall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(apiCall)}, 1000);
    });
}

const SelectionScreen = () => {
    const [bowls, setBowls] = useState([]);
    const [selections, setSelections] = useState([]);

    useEffect(() => {
        mockAPICall().then(bowls => {
            setBowls(bowls);
            setSelections(new Array(bowls.length));
        });
    }, []);

    const pickTeam = () => {};

    return (
        <div>
            <h1>Pick Your Winners</h1>
            {bowls.map(bowlGame => <BowlSelection bowlGame={bowlGame} key={bowlGame.id}/> )}
        </div>
    )
}

export default SelectionScreen;