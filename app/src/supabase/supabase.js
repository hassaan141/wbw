import { createClient } from "@supabase/supabase-js"
import { SUPABASE_URL, SUPABASE_KEY } from "@env";

const URL = SUPABASE_URL
const API_KEY = SUPABASE_KEY

export const supabase = createClient(URL, API_KEY)