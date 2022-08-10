import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    margin-top: 40px;
`;

export const Left = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;    
`;

export const Logo = styled.div`    
    display: flex;
    align-items: center;    
`;
export const LogoText = styled.div`
    font-size: 30px; 
    border-bottom: 1px dotted #FF2E63;
`;
export const LogoImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 0 5px;
`;

export const GameInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;
export const GridContainer = styled.div`
    max-width: 450px;    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;