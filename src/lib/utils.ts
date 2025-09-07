export function formatNaira(amount: number): string {
  if (typeof amount === undefined) {
    return "0.00";
  }
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(amount);
}
