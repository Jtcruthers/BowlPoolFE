import React, {useEffect, useState} from 'react';
import {useAlert} from 'react-alert';

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
        mockAPICall().then(bowls => {
            const selections = {};
            bowls.map(bowl => bowl.id).forEach(id => selections[id] = null);
            setBowls(bowls);
            setSelections(selections);
        });
    }, []);

    const alert = useAlert();

    const pickTeam = (bowlGameID) => {
        return team => {
            const newSelections = {...selections};
            const newSelection = team === newSelections[bowlGameID] ? null : team; // if selecting same team, unselect it
            newSelections[bowlGameID] = newSelection;
            setSelections(newSelections);
        }
    };

    const savePicks = () => {
        const allTeamsPicked = !Object.keys(selections).some(id => selections[id] === null);
        console.log(allTeamsPicked);
        if (!allTeamsPicked) {
            alert.error('You are missing teams');
        } else {
            alert.success('Saved Picks');
        }
    }

    return <SelectionScreen bowls={bowls} selections={selections} pickTeam={pickTeam} onSave={savePicks} />
}

export default SelectionScreenContainer;