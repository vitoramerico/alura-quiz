import styled from 'styled-components';

const Input = styled.input`
    background-color: ${({ theme }) => theme.colors.mainBg};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    padding: 5px 5px;
    color: white;
    overflow: hidden;
    width: 100%;
    height:40px;
    &:focus {
    outline: none;
    }
`;

export default Input;
