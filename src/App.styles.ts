import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 750px;    
    margin: auto;
    display: flex;
    margin-top: 40px;    

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const Left = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;            

    @media (max-width: 750px) {
        align-items: center;
        margin-bottom: 40px;
    }
`;

export const Logo = styled.div`    
    display: flex;
    align-items: center;    
`;
export const LogoText = styled.div`
    font-size: 30px; 
    border-bottom: 1px dotted #FF2E63;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
export const LogoImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 0 5px;
`;

export const GameInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 750px) {
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
    }
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 750px) {        
        justify-content: center;               
    }
`;
export const GridContainer = styled.div`
    width: 450px;    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 750px) {
        width: auto;
        gap: 12px;        
    }
`;

export const EndGame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
`;

export const EndGameImg = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
`;

export const EndGameInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
`;

export const Footer = styled.div`
    position: absolute;
    bottom: 15px; 
    left: 0;
    right: 0;  
    text-align: center;  
`;

export const FooterLink = styled.a`
    text-decoration: none;
    color: #FF2E63; 
    font-weight: bold;  
    font-family: Arial;
    font-size: 18px; 
`;