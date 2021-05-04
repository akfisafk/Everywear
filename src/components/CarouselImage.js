import styled from 'styled-components';

export const CarouselImage = styled.img`
    margin: 20px 0;
    width: 80%;
    opacity: .4;
    cursor: pointer;
    transition: all .2s ease;
    &:hover {
        transition: all .2s ease;
        opacity: 1;
        transform: scale(1.01);
    }
`