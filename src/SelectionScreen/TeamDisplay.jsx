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
    display: flex;
    flex-direction: row;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    background-color: white;
`;

const Logo = styled.div`
    border-top: 1px #eee solid;
    order: ${props => props.order ? props.order : 0};
    width: 100%;
`;

const Details = styled.div`
    order: ${props => props.order ? props.order : 0};
    width: 100%;
`;

const TeamDisplay = ({team, onLeft }) => {
    const {name, mascot, record, imgUrl} = team;

    const logoOrder = onLeft ? 0 : 1;
    const detailsOrder = onLeft ? 1 : 0;

    return (
        <TeamDisplayContainer>
            <Details order={detailsOrder} >
                <TeamName>{name}</TeamName>
                <Mascot>{mascot}</Mascot>
                <p>{record}</p>
            </Details>
            <Logo order={logoOrder} >
                <img src={imgUrl} alt={name} width={100} height={100}/>
            </Logo>
        </TeamDisplayContainer>
    )

}

export default TeamDisplay;