"use client";

import { FilterBar } from "@/components/filter-bar";
import styles from "./page.module.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsList } from "@/components/products-list";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Home() {
    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <main className={styles.main}>
                <FilterBar />
                <ProductsList />
            </main>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}
