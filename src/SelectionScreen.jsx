import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import BowlInformation from './BowlInformation';
import TeamPicker from './TeamPicker';
import apiCall from './apicall';

const HomeTeamContainer = styled.div`
    padding: 0 100px;
`;

const AwayTeamcontainer = styled.div`

`;

const TeamSelectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    align-items: center;
    justify-content: center;
`;

const mockAPICall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(apiCall)}, 1000);
    });
}

const SelectionScreen = () => {
    const [bowls, setBowls] = useState([]);

    useEffect(() => {
        mockAPICall().then(bowls => setBowls(bowls));
    }, []);

    return (
        <div>
            <h1>Pick Your Winners</h1>
            {bowls.map(bowlGame => {
                const {details, homeTeam, awayTeam} = bowlGame;

                return (
                    <TeamSelectionContainer>
                        <AwayTeamcontainer>
                            <TeamPicker team={awayTeam} />
                        </AwayTeamcontainer>
                        <BowlInformation bowl={details} />
                        <HomeTeamContainer>
                            <TeamPicker team={homeTeam} />
                        </HomeTeamContainer>
                    </TeamSelectionContainer>
    
                )
            })}
        </div>
    )
}

export default SelectionScreen;