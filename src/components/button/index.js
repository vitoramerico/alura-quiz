import styled from 'styled-components';

const Button = styled.button`
  background-color: #E91E63;
  color: white;
  border: none;
  border-radius: 4px;
  width: 100%;
  margin-top: 10px;
  height:40px;
  &:disabled {
    background-color: gray;
    }
`;

export default Button;
