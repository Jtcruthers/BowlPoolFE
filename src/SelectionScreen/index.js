import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {useAlert} from 'react-alert';

import SelectionScreen from './SelectionScreen';
import {getBowlGames, savePicks as savePicksApi} from '../services/';

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
    const alert = useAlert();

    useEffect(() => {
        const bowls = getBowlGames();
        const selections = {};
        bowls.map(bowl => bowl.id).forEach(id => selections[id] = null);
        setBowls(bowls);
        setSelections(selections);
    }, []);

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
        } else if (!nickname) {
            alert.error('No nickname set');
        } else {
            try {
                const bowlPicks = buildBowlPicks(selections, nickname);
                await savePicksApi(bowlPicks);
                history.push('/');
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