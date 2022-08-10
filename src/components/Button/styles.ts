import styled from 'styled-components';

export const Button = styled.div`
    display: flex;        
    width: 250px;
    height: 50px;
    background-color: #FF2E63;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease .3s;
    margin-top: 30px;

    &:hover {
        opacity: 0.9;
        box-shadow: 0 0 5px #EAEAEA;
    }
`;

export const ButtonIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-right: 1px solid rgba(255, 255, 255, .7);
`;
export const ButtonImg = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
`;

export const ButtonContent = styled.div`
    display: flex;
    align-items: center;   
    justify-content: center;
    width: 100%; 
    font-weight: bold;
    text-transform: uppercase;
`;

