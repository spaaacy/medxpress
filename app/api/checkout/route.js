const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { NextRequest, NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { productId, priceId } = await req.json();

    const checkoutSession = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.nextUrl.origin}/product/${productId}?success=true`,
      cancel_url: `${req.nextUrl.origin}/product/${productId}?cancelled=true`,
    });

    return NextResponse.json({ session: checkoutSession }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: error.statusCode || 500 });
  }
}
