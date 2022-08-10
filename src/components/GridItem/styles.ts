import styled from 'styled-components';

type GridItemType = {
    shown: boolean;
}
export const GridItem = styled.div<GridItemType>`
    width: 100px;
    height: 100px;  
    border-radius: 10px; 
    display: flex;
    justify-content: center;
    align-items: center; 
    cursor: pointer;
    background-color: ${props => props.shown ? '#08D9D6' : '#FF2E63'};
`;

export const GridIcon = styled.img`
    width: 60px;
    height: 60px;
    object-fill: cover;
`;