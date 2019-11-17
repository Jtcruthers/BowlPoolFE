import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import BowlInformation from './BowlInformation';
import TeamPicker from './TeamPicker';
import apiCall from './apicall';

const HomeTeamContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const AwayTeamcontainer = styled.div`
    width: 100%;
    height: 100%;
`;

const BowlSelectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid black;
    margin: 0 10%;
`;

const mockAPICall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(apiCall)}, 1000);
    });
}

const SelectionScreen = () => {
    const [bowls, setBowls] = useState([]);
    const [selections, setSelections] = useState([]);

    useEffect(() => {
        mockAPICall().then(bowls => {
            setBowls(bowls);
            setSelections(new Array(bowls.length));
        });
    }, []);

    const pickTeam = () => {};

    return (
        <div>
            <h1>Pick Your Winners</h1>
            {bowls.map(bowlGame => {
                const {id, details, homeTeam, awayTeam} = bowlGame;

                return (
                    <BowlSelectionContainer key={id}>
                        <AwayTeamcontainer>
                            <TeamPicker team={awayTeam} />
                        </AwayTeamcontainer>
                        <BowlInformation bowl={details} />
                        <HomeTeamContainer>
                            <TeamPicker team={homeTeam} />
                        </HomeTeamContainer>
                    </BowlSelectionContainer>
    
                )
            })}
        </div>
    )
}

export default SelectionScreen;