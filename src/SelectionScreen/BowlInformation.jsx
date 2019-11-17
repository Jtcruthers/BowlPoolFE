import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
    font-size: 1rem;
    margin: 0 0 7px 0;
    padding: 0 0 5px 0;
`;

const Detail = styled.p`
    font-size: 1rem;
    margin: 3px 0;
    padding: 0;
`;

const BowlInformation = ({bowl}) => {
    const {name, location, date, time} = bowl;

    return (
        <div>
            <Title>{name}</Title>
            <Detail>{location}</Detail>
            <Detail>{date}</Detail>
            <Detail>{time}</Detail>
        </div>
    )

}

export default BowlInformation;