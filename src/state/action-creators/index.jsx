export const depositMoney = (amount) => {
  return (distach) => {
    distach({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return (distach) => {
    distach({
      type: "withdraw",
      payload: amount,
    });
  };
};
