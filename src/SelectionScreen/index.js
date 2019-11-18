import React, {useEffect, useState} from 'react';

import SelectionScreen from './SelectionScreen';

import apiCall from './apicall';

const mockAPICall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(apiCall)}, 0);
    });
}

const SelectionScreenContainer = () => {
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

    return <SelectionScreen bowls={bowls} selections={selections} pickTeam={pickTeam} />
}

export default SelectionScreenContainer;