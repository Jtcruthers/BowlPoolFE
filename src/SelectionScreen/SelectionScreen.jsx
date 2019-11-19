import React from 'react';
import styled from 'styled-components';

import BowlSelection from './BowlSelection';
import NicknameInput from './NicknameInput';
import StyledButton from '../components/StyledButton';

const BowlSelectionContainer = styled.div`
    width: 80%;
    margin: 30px 10%;
`;

const SelectionScreen = ({bowls, selections, nickname, pickTeam, onSave}) => (
    <div>
        <h1>Pick Your Winners</h1>
        <NicknameInput nickname={nickname.get} setNickname={nickname.set} />
        {bowls.map(bowlGame => 
            <BowlSelectionContainer key={bowlGame.id}>
                <BowlSelection
                    bowlGame={bowlGame}
                    selectedTeam={selections[bowlGame.id]}
                    onSelectTeam={pickTeam(bowlGame.id)}
                />
            </BowlSelectionContainer>
        )}
        <StyledButton onClick={onSave}>Submit</StyledButton>
    </div>
)

export default SelectionScreen;