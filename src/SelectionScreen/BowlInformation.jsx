import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
    font-size: 1rem;
`;

const BowlInformation = ({bowl}) => {
    const {name, location, date, time} = bowl;

    return (
        <div>
            <Title>{name}</Title>
            <p>{location}</p>
            <p>{date}</p>
            <p>{time}</p>
        </div>
    )

}

export default BowlInformation;