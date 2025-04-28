export const paymentOptions = {
  fullPayment: {
    label: "Full Payment",
    price: 550000,
    description: "Full Payment for the course or service",
  },
  installment: {
    label: "Installment Payment",
    price: 330000,
    description: "Payment in two installments of ₦300,000 each",
  },
  paySmallSmall: {
    firstpayment: {
      label: "Pay Small Small",
      price: 85000,
      description: "Payment broken into smaller amounts of ₦100,000",
    },
    secondpayment: {
      label: "Pay Small Small",
      price: 85000,
      description: "Payment broken into smaller amounts of ₦100,000",
    },
    thirdpayment: {
      label: "Pay Small Small",
      price: 85000,
      description: "Payment broken into smaller amounts of ₦100,000",
    },
    fourthpayment: {
      label: "Pay Small Small",
      price: 110000,
      description: "Payment broken into smaller amounts of ₦100,000",
    },
    fifthpayment: {
      label: "Pay Small Small",
      price: 100000,
      description: "Payment broken into smaller amounts of ₦100,000",
    },
  },
};

export const formatPrice = (amount: number) => {
  return amount.toLocaleString("en-NG");
};
