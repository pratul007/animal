import styled from "styled-components";

export const PostHeading = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #000000;
    flex-basis: 70%;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    text-align: left;
`;

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    width: 320px;
    border-radius: 8px;
    border: 1px solid black;
    padding : 20px 0;
    box-sizing: border-box;

`;

export const Image = styled.img`
    width: 280px;
    height: 150px;
    object-fit: contain;
`;

export const PostDescription = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: #1E1E1E;
    padding-top: 20px;
`;

export const Group = styled.div`
    display: flex;
    justify-content : space-between
    margin: 0 auto;
    align-items:center;
    width: 90%;
    padding-top: ${({padding}) => padding || 0}px;
`;

export const Price = styled.div`
    font-size: 12px;
    font-weight: 700;
    color: #1BA398;
    flex-basis:30%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CallButton = styled.a`
    display: flex;
    width: 100px;
    justify-content : space-evenly;
    align-items: center;
    text-decoration: none;
`;

export const CallButtonImage = styled.img`
    max-width: 100%;
    height: 40px; 
`;

export const Date = styled.div`
    padding-top: 5px;
    font-size: 10px;
    font-weight: 500;
    color: #000000;
    flex-basis:45%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Location = styled.div`
    padding-top: 5px;
    font-size: 10px;
    font-weight: 500;
    color: #1E1E1E;
    flex-basis:55%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

