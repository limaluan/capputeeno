"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./product-card";
import { styled } from "styled-components";

interface IProductsListProps {}

export function ProductsList(props: IProductsListProps) {
    const { data } = useProducts();

    const ListContainer = styled.div`
        margin-top: 32px;

        display: grid;
        grid-template-columns: repeat(auto-fill, 256px);
        column-gap: 32px;
        row-gap: 24px;
        max-width: 100%;
    `;

    return (
        <ListContainer>
            {data?.map((product) => (
                <ProductCard
                    image={product.image_url}
                    title={product.name}
                    price={product.price_in_cents}
                    key={product.id}
                />
            ))}
        </ListContainer>
    );
}
