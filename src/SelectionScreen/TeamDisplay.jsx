import React from 'react';
import styled from 'styled-components';

const TeamName = styled.h3`
    font-size: 1rem;
    margin: 10px 0 0 0;
`;

const Mascot = styled.div`
    margin: 0;
    padding: 0;
`;

const TeamDisplayContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    background-color: white;
`;

const LogoContainer = styled.div`
    border-top: 1px #eee solid;
`;

const TeamDisplay = ({team}) => {
    const {name, mascot, record, imgUrl} = team;

    return (
        <TeamDisplayContainer>
            <TeamName>{name}</TeamName>
            <Mascot>{mascot}</Mascot>
            <p>{record}</p>
            <LogoContainer>
                <img src={imgUrl} alt={name} width={100} height={100}/>
            </LogoContainer>
        </TeamDisplayContainer>
    )

}

export default TeamDisplay;