import { supabase } from "@/utils/supabase";

const productsTable = "products";

export const fetchAllProducts = async () => {
    const { data, error } = await supabase
        .from(productsTable)
        .select("*");
    if (error) throw error;
    return data;
};

export const fetchProductsByName = async (name) => {
    const { data, error } = await supabase
        .from(productsTable)
        .select("*")
        .ilike("name", `%${name}%`);
    if (error) throw error;
    return data;
};