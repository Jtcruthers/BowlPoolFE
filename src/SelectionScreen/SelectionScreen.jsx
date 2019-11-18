import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

import BowlSelection from './BowlSelection';
import StyledButton from '../components/StyledButton';

const BowlSelectionContainer = styled.div`
    width: 80%;
    margin: 30px 10%;
`;

const SelectionScreen = ({bowls, selections, pickTeam, onSave}) => (
    <div>
        <h1>Pick Your Winners</h1>
        {bowls.map(bowlGame => 
            <BowlSelectionContainer key={bowlGame.id}>
                <BowlSelection
                    bowlGame={bowlGame}
                    selectedTeam={selections[bowlGame.id]}
                    onSelectTeam={pickTeam(bowlGame.id)}
                />
            </BowlSelectionContainer>
        )}
        <Link to="/picks" onClick={event => onSave(event)}>
            <StyledButton>Submit</StyledButton>
        </Link>
    </div>
)

export default SelectionScreen;