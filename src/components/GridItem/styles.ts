import styled from 'styled-components';

type GridItemType = {
    shown: boolean;
}
export const GridItem = styled.div<GridItemType>`
    background-color: ${props => props.shown ? '#08D9D6' : '#FF2E63'};    
    width: 100px;
    height: 100px;  
    border-radius: 10px; 
    display: flex;
    justify-content: center;
    align-items: center; 
    cursor: pointer;    
`;

type GridIconType = {
    opacity?: number;
}
export const GridIcon = styled.img<GridIconType>`
    width: 80px;
    height: 80px;
    object-fit: cover;
    opacity: ${props => props.opacity ?? 1};
`;