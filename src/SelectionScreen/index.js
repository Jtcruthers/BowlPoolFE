import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {useAlert} from 'react-alert';

import SelectionScreen from './SelectionScreen';
import {savePicks as savePicksApi} from '../api';

import apiCall from './apicall';

const mockAPICall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(apiCall)}, 0);
    });
}

const buildBowlPicks = (selections, nickname) => {
    return {
        name: nickname,
        picks: selections
    }
}

const SelectionScreenContainer = ({history}) => {
    const [bowls, setBowls] = useState([]);
    const [selections, setSelections] = useState({});
    const [nickname, setNickname] = useState('');

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

    const savePicks = async () => {
        const allTeamsPicked = !bowls.map(bowl => bowl.id).some(id => selections[id] === null);
        if (!allTeamsPicked) {
            alert.error('You are missing teams');
        } else {
            try {
                const bowlPicks = buildBowlPicks(selections, nickname);
                await savePicksApi(bowlPicks);
                history.push('/picks');
            } catch {
                alert.error('Couldn\'t save picks')
            }
        }
    }

    return (
        <SelectionScreen
                bowls={bowls}
                selections={selections}
                nickname={{get: nickname, set: setNickname}}
                pickTeam={pickTeam}
                onSave={savePicks}
        />
    )
}

export default withRouter(SelectionScreenContainer);