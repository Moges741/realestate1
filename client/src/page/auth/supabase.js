import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://uoktfmgjuraiwhpizenn.supabase.co'
const supabaseKey = 'sb_publishable_D32gX7lUPyrs5uPVBlynYg_xP5wh_Lq'
const supabase = createClient(supabaseUrl, supabaseKey)
const supabaseServiceRoleKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVva3RmbWdqdXJhaXdocGl6ZW5uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzI5Mzk0OCwiZXhwIjoyMDgyODY5OTQ4fQ.WrODTbBQeLIk4205D0-UpBNpy2BmW55JFzKKmfYu9_U'
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey)
export default supabase
