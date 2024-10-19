import { supabase } from "@/utils/supabase";
import { v4 as uuidv4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
  try {
    const formData = await req.formData();
    const product = JSON.parse(formData.get("product"));
    const image = formData.get("image");

    const productId = uuidv4();
    // const product = await stripe.products.create({
    //   name: product.title,
    //   default_price_data: {
    //     currency: "USD",
    //     unit_amount: product.price * 100,
    //   },
    // });

    const imageId = uuidv4();
    let results = await supabase
      .from("product")
      .insert({ ...product, id: productId, image_id: image ? imageId : null, stripe_product: product });
    if (results.error) throw results.error;

    results = await supabase.storage
      .from("product-image")
      .upload(`${productId}/${imageId}`, image, { cacheControl: 3600, upsert: true });
    if (results.error) throw results.error;

    return NextResponse.json({ message: "Product created successfully!", productId }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
