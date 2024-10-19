import { supabase } from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { productId } = params;
    let response = await supabase.from("product").select("*").eq("id", productId);
    if (response.error) throw response.error;
    return NextResponse.json({ product: response.data[0] }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
