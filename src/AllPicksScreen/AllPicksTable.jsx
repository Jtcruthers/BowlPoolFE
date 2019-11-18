import React from 'react';
import styled from 'styled-components';



const AllPicksTable = ({bowls, picks}) => {

    return (
        <table>
            <thead>
                <tr>
                {picks.map(pick => <th>{pick.name}</th>)}
                </tr>
            </thead>
            <tbody>
                {bowls.map(bowl => (
                    <tr>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default AllPicksTable;