import styled from "styled-components";

const Container = styled.div`
    background-color: #140c4480;
`;
const MainTitle = styled.h1`
    font-size: ${(props) => props.size};
    text-align: center;
    color: #ffeb3b;
`;

export default function PagesHeader() {
    return (
        <div>
            <Container>
                <MainTitle size="2rem">Internet Já!</MainTitle>
                <MainTitle size="3rem">Seja Bem Vindo!</MainTitle>
            </Container>
        </div>
    );
}
