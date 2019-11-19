import React from 'react';
import styled from 'styled-components';

import AllPicksTable from './AllPicksTable.jsx'
import StyledButton from '../components/StyledButton';

const AllPicksContainer = styled.div`
    text-align: center;
`;

const TableContainer = styled.div`
    margin: 0 0 0 -5%;
`;

const AllPicksScreen = ({bowls, picks, picksPerBowl, redirectToSelection}) => (
    <AllPicksContainer>
        <h2>Everyone's picks</h2>
        <TableContainer>
            <AllPicksTable bowls={bowls} picks={picks} picksPerBowl={picksPerBowl} />
        </TableContainer>
        <StyledButton onClick={redirectToSelection}>Make Your Picks</StyledButton>
    </AllPicksContainer>
)

export default AllPicksScreen;