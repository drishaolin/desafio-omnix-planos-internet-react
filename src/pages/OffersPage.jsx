import OffersCard from "../components/OffersCard";
import { offers } from "../data/offers";
import { Container, MainTitle } from "../styles";

export default function OffersPage() {
    return (
        <div>
            <Container>
                <MainTitle size="2rem">Internet Já!</MainTitle>
                <MainTitle size="1.5rem">Suas Ofertas</MainTitle>
            </Container>
            <OffersCard>{offers}</OffersCard>
        </div>
    )
}
