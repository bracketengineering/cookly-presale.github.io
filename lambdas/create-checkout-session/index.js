// Import necessary AWS SDK and Stripe SDK
// const AWS = require("aws-sdk");
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";
import Stripe from "stripe";

export async function handler(event, context) {
  const apiKey = await getSecret();
  const stripe = new Stripe(apiKey); // Ensure your Stripe secret key is stored securely
  // Parse the request body from the event
  console.log("Event:", event);

  try {
    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Use the actual price ID from your Stripe account
          price: event.priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      discounts: [
        {
          promotion_code: event.promo_code,
        },
      ],
      success_url: `${event.domain}/success.html`,
      cancel_url: `${event.domain}/cancel.html`,
      automatic_tax: { enabled: true },
    });

    // Return the session URL to the client
    return {
      statusCode: 303,
      headers: {
        Location: session.url,
      },
      body: JSON.stringify({
        message: "Redirect to Stripe checkout",
        url: session.url,
      }),
    };
  } catch (error) {
    console.error("Stripe checkout session creation failed:", error);

    // Handle errors
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to create Stripe checkout session",
      }),
    };
  }
}

async function getSecret() {
  const client = new SecretsManagerClient({ region: "eu-west-2" });
  const secret = await client.send(
    new GetSecretValueCommand({ SecretId: "stripe-api-key" })
  );
  if (!secret.SecretString) {
    throw new Error("No secret string found");
  }
  return secret.SecretString;
}
