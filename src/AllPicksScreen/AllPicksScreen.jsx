import React from 'react';
import styled from 'styled-components';

import AllPicksTable from './AllPicksTable.jsx'
import StyledButton from '../components/StyledButton';

const AllPicksContainer = styled.div`
    text-align: center;
`;

const AllPicksScreen = ({bowls, picks, picksPerBowl, redirectToSelection}) => (
    <AllPicksContainer>
        <h2>Everyone's picks</h2>
        <AllPicksTable bowls={bowls} picks={picks} picksPerBowl={picksPerBowl} />
        <StyledButton onClick={redirectToSelection}>Make Your Picks</StyledButton>
    </AllPicksContainer>
)

export default AllPicksScreen;