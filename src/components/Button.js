import styled from 'styled-components';

export const Button = styled.button`
    background-color: #121212;
    color: white;
    padding: 0 20px;
    height: 50px;
    margin: 0 10px;
    outline: none;
    border: none;
    box-shadow: 0 5px 4px #9e9d9d;
    transition: all .1s ease;
    &:hover {
        transition: all .2s ease;
        box-shadow: 0 5px 8px #9e9d9d;
        font-size: 13.3px;
        background-color: #D94234;
        cursor: pointer;
    }
`