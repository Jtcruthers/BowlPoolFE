import React from 'react';
import styled from 'styled-components';



const AllPicksTable = ({bowls, picks, picksPerBowl}) => (
    <table>
        <thead>
            <tr>
                <th>Matchup</th>
                {picks.map(pick => <th key={pick.id}>{pick.name}</th>)}
            </tr>
        </thead>
        <tbody>
            {bowls.map(bowl => (
                <tr key={bowl.id}>
                    <td>{`${bowl.awayTeam.name} vs ${bowl.homeTeam.name}`}</td>
                    {
                        picksPerBowl[bowl.id].map((pick, index) => <td key={index}>{pick}</td>)
                    }
                </tr>
            ))}
        </tbody>
    </table>
)

export default AllPicksTable;