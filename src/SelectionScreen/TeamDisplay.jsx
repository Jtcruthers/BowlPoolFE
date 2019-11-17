import React from 'react';
import styled from 'styled-components';

const TeamName = styled.h3`
    font-size: 1rem;
    margin: 10px 0 0 0;
`;

const DetailLine = styled.p`
    margin: 0 0 20px 0;
    padding: 0;
`;

const TeamDisplayContainer = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    background-color: white;
    justify-content: center;
`;

const Logo = styled.div`
    margin-top: 10px;
    border-top: 1px #eee solid;
    order: ${props => props.order || 0};
    width: 100%;
`;

const Details = styled.div`
    order: ${props => props.order || 0};
    width: 100%;
`;

const SelectedIndicator = styled.div`
    margin-top: 10px;
    width: 100%;
    order: 1;
    font-size: 4rem;
`;

const TeamDisplay = ({team, onLeft, selected}) => {
    const {name, mascot, record, imgUrl} = team;

    const logoOrder = onLeft ? 0 : 2;
    const detailsOrder = onLeft ? 2 : 0;

    return (
        <TeamDisplayContainer>
            <Details order={detailsOrder} >
                <TeamName>{name}</TeamName>
                <DetailLine>{mascot}</DetailLine>
                <DetailLine>{record}</DetailLine>
            </Details>
            <SelectedIndicator style={{'width': '100%', 'order': 1}}>
                {selected && <span>&#10003;</span>}
            </SelectedIndicator>
            <Logo order={logoOrder} >
                <img src={imgUrl} alt={name} width={90} height={90}/>
            </Logo>
        </TeamDisplayContainer>
    )
}

export default TeamDisplay;