import React from 'react';
import styled from 'styled-components';

import PicksRow from './PicksRow';

const StyledTable = styled.table`
    border-collapse: separate;
    border-spacing: 0 2em;
    margin: 0 auto;
`;

const StyledTh = styled.th`
    font-size: 1.5rem;
`;

const AllPicksTable = ({bowls, picks, picksPerBowl}) => (
    <StyledTable>
        <thead>
            <tr>
                <StyledTh>Matchup</StyledTh>
                {picks.map(pick => <StyledTh key={pick.id}>{pick.name}</StyledTh>)}
            </tr>
        </thead>
        <tbody>
            {bowls.map(bowl => <PicksRow bowl={bowl} picksPerBowl={picksPerBowl} key={bowl.id}/>)}
        </tbody>
    </StyledTable>
)

export default AllPicksTable;