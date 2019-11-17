import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.75rem 1.5rem 0.75rem 1.5rem;
  margin-top: 1rem;
  font-weight: 700;
  border: 2px solid white;
  border-radius: 0.25rem;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  &:hover {
    border-color: transparent;
    color: #6574cd;
    background-color: white;
  }
`;

export default StyledButton;