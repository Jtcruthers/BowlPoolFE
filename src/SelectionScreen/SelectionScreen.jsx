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
    const [selections, setSelections] = useState({});

    useEffect(() => {
        mockAPICall().then(bowls => setBowls(bowls));
    }, []);

    const pickTeam = (bowlGameID) => {
        return team => {
            const newSelections = {...selections};
            const newSelection = team === newSelections[bowlGameID] ? null : team; // if selecting same team, unselect it
            newSelections[bowlGameID] = newSelection;
            setSelections(newSelections);
        }
    };

    return (
        <div>
            <h1>Pick Your Winners</h1>
            {bowls.map(bowlGame => 
                <BowlSelection
                    bowlGame={bowlGame}
                    selectedTeam={selections[bowlGame.id]}
                    onSelectTeam={pickTeam(bowlGame.id)}
                    key={bowlGame.id}
                />
            )}
        </div>
    )
}

export default SelectionScreen;