import { Button, OfferItem, OffersList } from "../styles";

export default function OffersCard({ children: offers }) {
    return (
        <OffersList>
            {offers.userData.offers.map((offer) => (
                <OfferItem>
                    <h1>{offer.name}</h1>
                    <Button bgColor="#ffffff" color="#5cbac7" border="solid 2px #5cbac7">
                        Adquira já!
                    </Button>
                    <p>{offer.price}</p>
                </OfferItem>
            ))}
        </OffersList>
    );
}
