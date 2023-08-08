"use client";

import { useProducts } from "@/hooks/useProducts";

interface IProductsListProps {}

export function ProductsList(props: IProductsListProps) {
    const { data } = useProducts();

    return <div></div>;
}
