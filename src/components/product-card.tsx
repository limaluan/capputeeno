import { formatPrice } from "@/utils/format-price";
import { styled } from "styled-components";

interface IProductCardProps {
    image: string;
    title: string;
    price: string;
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0 0 4px 4px;

    width: 256px;

    img {
        width: 256px;
        height: 300px;
    }

    h3,
    p {
        width: 100%;
        padding: 8px 12px;
    }

    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: var(--shapes-dark);
    }

    > hr {
        width: 228px;
        height: 1px;
        border: none;
        background: var(--shapes);
    }
`;

export function ProductCard(props: IProductCardProps) {
    return (
        <Card>
            <img src={props.image} alt={`imagem do produto ${props.title}`} />
            <h3>{props.title}</h3>
            <hr />
            <p>{formatPrice(props.price)}</p>
        </Card>
    );
}
