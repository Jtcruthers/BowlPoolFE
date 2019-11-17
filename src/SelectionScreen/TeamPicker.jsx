import React from 'react';
import styled from 'styled-components';

const TeamName = styled.h3`
    font-size: 1rem;
`;

const TeamPicker = ({team}) => {
    const {name, mascot, record, imgUrl} = team;

    return (
        <div>
            <TeamName>{name}</TeamName>
            <p>{mascot}</p>
            <p>{record}</p>
            <img src={imgUrl} alt={name} width={100} height={100}/>
        </div>
    )

}

export default TeamPicker;