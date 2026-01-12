export const currencyFormatter = (value: number) => {
    return value.toLocaleString('es-CO', {
        style:'currency',
        currency:'COL',
        minimumFractionDigits: 2,
    });
};