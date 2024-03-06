import axios from "axios";

export const sendSignup = async (formData: any) => {
  try {
    const response = await axios.post(
      "https://mpddx5nqrl.execute-api.eu-west-2.amazonaws.com/v1/presale-signup",
      formData
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending signup:", error);
  }
};
type CheckoutSessionInput = {
  priceId: string;
  url: string;
  domain: string;
  promo_code: string | null;
};
export const createCheckoutSession = async (formData: CheckoutSessionInput) => {
  try {
    const response = await axios.post(
      "https://mpddx5nqrl.execute-api.eu-west-2.amazonaws.com/v1/create-checkout-session",
      formData
    );
    console.log(Object.keys(response.data));
    return response.data;
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return error;
  }
};
