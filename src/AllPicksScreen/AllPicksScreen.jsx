import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import picksApiCall from './picks_apicall';
import bowlApiCall from './bowlgames_apicall';

import AllPicksTable from './AllPicksTable.jsx'

const AllPicksContainer = styled.div`
    text-align: center;
`;

const AllPicksScreen = ({bowls, picks, picksPerBowl}) => (
    <AllPicksContainer>
        <h2>Everyone's picks</h2>
        <AllPicksTable bowls={bowls} picks={picks} picksPerBowl={picksPerBowl} />
    </AllPicksContainer>
)

export default AllPicksScreen;