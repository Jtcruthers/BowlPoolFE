import React, {useState} from 'react';
import styled from 'styled-components';

import BowlInformation from './BowlInformation';
import TeamDisplay from './TeamDisplay';

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

const BowlSelection = ({bowlGame}) => {
    const {id, details, homeTeam, awayTeam} = bowlGame;

    const [selection, setSelection] = useState(null);

    const pickTeam = (team) => {
        if (team === selection) {
            setSelection(null);
        } else {
            setSelection(team);
        }
    };

    return (
        <BowlSelectionContainer key={id}>
            <BowlSelectionItem onClick={() => pickTeam('away')}>
                <TeamDisplay
                    team={awayTeam}
                    onLeft={true}
                    selected={selection === 'away' ? true : false}
                />
            </BowlSelectionItem>
            <BowlSelectionItem>
                <BowlInformation bowl={details} />
            </BowlSelectionItem>
            <BowlSelectionItem onClick={() => pickTeam('home')}>
                <TeamDisplay
                    team={homeTeam}
                    onLeft={false}
                    selected={selection === 'home' ? true : false}
                />
            </BowlSelectionItem>
        </BowlSelectionContainer>
    )
}

export default BowlSelection;