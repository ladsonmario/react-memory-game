import styled from 'styled-components';

type GridItemType = {
    shown: boolean;
    flip: boolean;
}
export const GridItem = styled.div<GridItemType>`
    background-color: ${props => props.shown ? 'rgba(8,217,214,0.9)' : 'rgba(255,46,99,0.9)'};    
    border: 2px inset #fff;
    width: 100px;
    height: 100px;  
    border-radius: 10px; 
    display: flex;
    justify-content: center;
    align-items: center; 
    cursor: pointer;
    transform: rotateY(${props => props.flip ? '180deg' : '0deg'});
    transition: all ease .12s;

    @media (max-width: 750px) {
        width: 75px;
        height: 75px;
    }
`;

type GridIconType = {
    opacity?: number;
}
export const GridIcon = styled.img<GridIconType>`
    width: 80px;
    height: 80px;
    object-fit: cover;    
    opacity: ${props => props.opacity ?? 1};

    @media (max-width: 750px) {
        width: 65px;
        height: 65px;
    }
`;