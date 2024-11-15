import { supabase } from "@/utils/supabase";
import { v4 as uuidv4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        // Authentication
        const access_token = req.headers.get("x-supabase-auth").split(" ")[0];
        const refresh_token = req.headers.get("x-supabase-auth").split(" ")[1];
        if (!access_token || !refresh_token) throw Error("You must be authorized to do this action!");
        const auth = await supabase.auth.setSession({ access_token, refresh_token });
        if (auth.error) throw auth.error;

        const formData = await req.formData();
        const pdfFile = formData.get("pdfFile");

        if (!pdfFile) {
            throw Error("No file uploaded.");
        }

        const prescriptionId = uuidv4();
        const fileId = uuidv4(); // Always generate a file_id
        const fileName = pdfFile.name; // Get the name of the uploaded file

        let results = await supabase
            .from("prescriptions")
            .insert({ id: prescriptionId, file_id: fileId, name: fileName });
        if (results.error) throw results.error;

        // Upload the PDF file to the storage bucket
        results = await supabase.storage
            .from("prescription-pdf")
            .upload(`${fileId}`, pdfFile, { cacheControl: 3600, upsert: true });
        if (results.error) throw results.error;

        return NextResponse.json({ message: "Prescription created successfully!", prescriptionId }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
