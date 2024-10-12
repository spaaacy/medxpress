import { supabase } from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const { productId } = res.params;
    let response = await supabase.from("product").select("*").ilike("name", `%${search}%`);
    if (response.error) throw response.error;
    return NextResponse.json({ products: response.data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
