import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import BowlSelection from './BowlSelection';
import StyledButton from '../components/StyledButton';
import apiCall from './apicall';

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
            <StyledButton>Save</StyledButton>
        </div>
    )
}

export default SelectionScreen;