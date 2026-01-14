import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// 이 변수를 통해 어디서든 DB를 조작할 수 있습니다.
export const supabase = createClient(supabaseUrl, supabaseKey);