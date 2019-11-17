import React from 'react';
import styled from 'styled-components';

const BowlInformation = ({bowl}) => {
    const {name, location, date, time} = bowl;

    return (
        <div>
            <h3>{name}</h3>
            <p>{location}</p>
            <p>{date}</p>
            <p>{time}</p>
        </div>
    )

}

export default BowlInformation;