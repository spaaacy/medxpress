import { supabase } from "@/utils/supabase";
import { preloadFont } from "next/dist/server/app-render/entry-base";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function PATCH(req, res) {
  try {
    const formData = await req.formData();
    const prescription = formData.get("prescription");

    const imageId = uuidv4();
    const results = await supabase.storage
      .from("prescription-pdf")
      .upload(imageId, prescription, { cacheControl: 3600, upsert: true });
    if (results.error) throw results.error;

    return NextResponse.json({ message: "Prescription uploaded!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
