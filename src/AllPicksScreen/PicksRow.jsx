import React from 'react';

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

const PicksRow = ({bowl, picksPerBowl}) => (
    <tr>
        <td>{`${bowl.awayTeam.name} vs ${bowl.homeTeam.name}`}</td>
        {
            picksPerBowl[bowl.id].map((pick, index) => <Pick bowl={bowl} pick={pick} key={index} />)
        }
    </tr>
)

export default PicksRow;