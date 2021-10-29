import styled from "styled-components";

export const Container = styled.div`
    background-color: #140c4480;
`;
export const MainTitle = styled.h1`
    font-size: ${(props) => props.size};
    text-align: center;
    color: #ffeb3b;
`;

export const OffersList = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const OfferContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const OfferItem = styled.div`
    color: #140c44;
    text-align: center;
    border: solid 2px #5cbac7;
    border-radius: 15px;
    width: 20%;
`;

export const Button = styled.button`
    background-color: ${(props)=> props.bgColor};
    color: ${(props)=> props.color};
    font-weight: 800;
    border:${(props)=> props.border};
    border-radius: 20px;
    padding: 0.6rem;
    margin-top: 1rem;
    align-self: ${(props)=> props.alignSelf};
    cursor: pointer;
    position: ${(props)=> props.position};
    bottom: ${(props)=> props.bottom};
    right: ${(props)=> props.right}
`;