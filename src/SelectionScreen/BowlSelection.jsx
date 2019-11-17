import React from 'react';
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
    align-items: center;
    justify-content: center;
`;

const BowlSelection = ({bowlGame, selectedTeam, onSelectTeam}) => {
    const {id, details, homeTeam, awayTeam} = bowlGame;

    return (
        <BowlSelectionContainer key={id}>
            <BowlSelectionItem onClick={() => onSelectTeam('away')}>
                <TeamDisplay
                    team={awayTeam}
                    onLeft={true}
                    selected={selectedTeam === 'away' ? true : false}
                />
            </BowlSelectionItem>
            <BowlSelectionItem>
                <BowlInformation bowl={details} />
            </BowlSelectionItem>
            <BowlSelectionItem onClick={() => onSelectTeam('home')}>
                <TeamDisplay
                    team={homeTeam}
                    onLeft={false}
                    selected={selectedTeam === 'home' ? true : false}
                />
            </BowlSelectionItem>
        </BowlSelectionContainer>
    )
}

export default BowlSelection;