import React from 'react';
import styled from 'styled-components';

const TeamPicker = ({team}) => {
    const {name, mascot, record, url} = team;

    return (
        <div>
            <h3>{name}</h3>
            <p>{mascot}</p>
            <p>{record}</p>
            <img src={url} alt={name} width={40} height={40}/>
        </div>
    )

}

export default TeamPicker;