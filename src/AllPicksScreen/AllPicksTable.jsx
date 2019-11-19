import React from 'react';
import styled from 'styled-components';

import {getImageUrlFromUri} from '../utils';

const Pick = ({bowl, pick}) => {
    const pickName = pick === 'home' ? bowl.homeTeam.name : bowl.awayTeam.name; 
    const uri = pick === 'home'? bowl.homeTeam.uri : bowl.awayTeam.uri;
    const imageUrl = getImageUrlFromUri(uri);
    return (
        <td>
            <img src={imageUrl} alt={`${pickName} logo`} width={50} height={50} />
            <p>{pick === 'home' ? bowl.homeTeam.name : bowl.awayTeam.name}</p>
        </td>
    )
}

const StyledTable = styled.table`
    border-collapse: separate;
    border-spacing: 0 2em;
    margin: 0 auto;
`;

const AllPicksTable = ({bowls, picks, picksPerBowl}) => (
    <StyledTable>
        <thead>
            <tr>
                <th>Matchup</th>
                {picks.map(pick => <th key={pick.id}>{pick.name}</th>)}
            </tr>
        </thead>
        <tbody>
            {bowls.map(bowl => (
                <tr key={bowl.id}>
                    <td>{`${bowl.awayTeam.name} vs ${bowl.homeTeam.name}`}</td>
                    {
                        picksPerBowl[bowl.id].map((pick, index) => <Pick bowl={bowl} pick={pick} key={index} />)
                    }
                </tr>
            ))}
        </tbody>
    </StyledTable>
)

export default AllPicksTable;