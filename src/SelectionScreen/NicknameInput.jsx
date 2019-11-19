import React from 'react';
import styled from 'styled-components';

const NicknameLabel = styled.label`
    border-radius: 5px 0 0 5px;
    padding: 10px;
    background-color: white;
    width: 100%;
    border-right: 1px solid #8E8D8A;
    border: 1px solid #
    height: 41px;
    width: 25%;
`;

const StyledInput = styled.input`
    border: 2px solid white;
    height: 35px;
    width: 100%;
    padding: 10px 0 10px 22%;
    font-size: 1.5rem;
    overflow: hidden;
`;

const InputContainer = styled.div`
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: white;
    width: 40%;
    margin: 0 30%;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
`;

const NicknameInput = ({nickname, setNickname}) => (
    <InputContainer>
        <NicknameLabel>Nickname</NicknameLabel>
        <StyledInput value={nickname} onChange={(e) => setNickname(e.target.value)} />
    </InputContainer>
)

export default NicknameInput;