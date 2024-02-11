export const priceFormatter = (price, currency, discount) => {
  const priceWithDiscount = (price - (price / 100) * discount).toLocaleString(
    "en-Us",
    {
      style: "currency",
      currency,
    }
  );

  const priceWithoutDiscount = price.toLocaleString("en-Us", {
    style: "currency",
    currency,
  });
  return {
    priceWithDiscount,
    priceWithoutDiscount,
  };
};
