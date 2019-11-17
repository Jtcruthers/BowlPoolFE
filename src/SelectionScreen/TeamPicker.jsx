import React from 'react';
import styled from 'styled-components';

const TeamName = styled.h3`
    font-size: 1rem;
`;

const TeamPicker = ({team}) => {
    const {name, mascot, record, url} = team;

    return (
        <div>
            <TeamName>{name}</TeamName>
            <p>{mascot}</p>
            <p>{record}</p>
            <img src={url} alt={name} width={40} height={40}/>
        </div>
    )

}

export default TeamPicker;