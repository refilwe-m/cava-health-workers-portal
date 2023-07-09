import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gnvynmgmkswaourfeaxn.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;
const supabaseService = createClient(supabaseUrl, supabaseKey);
export default supabaseService;
