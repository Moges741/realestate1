import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://uoktfmgjuraiwhpizenn.supabase.co'
const supabaseKey = 'sb_publishable_D32gX7lUPyrs5uPVBlynYg_xP5wh_Lq'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase