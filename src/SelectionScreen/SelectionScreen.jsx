import React from 'react';
import styled from 'styled-components';

import BowlSelection from './BowlSelection';
import NicknameInput from './NicknameInput';
import StyledButton from '../components/StyledButton';

const BowlSelectionContainer = styled.div`
    width: 80%;
    margin: 30px 10%;
`;

const NicknameInputContainer = styled.div`
    margin: 3rem 0;
`;

const SelectionTitle = styled.h1`
    margin-top: 2.5rem;
`;

const SelectionScreen = ({bowls, selections, nickname, pickTeam, onSave}) => (
    <div>
        <SelectionTitle>Pick Your Winners</SelectionTitle>
        <NicknameInputContainer>
            <NicknameInput nickname={nickname.get} setNickname={nickname.set} />
        </NicknameInputContainer>
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