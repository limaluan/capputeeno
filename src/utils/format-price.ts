export function formatPrice(value: number | string) {
    return (Number(value) / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}
