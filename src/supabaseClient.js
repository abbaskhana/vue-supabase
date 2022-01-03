
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wqxxgfhzqasixmyfsdut.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTIwMTA5MywiZXhwIjoxOTU2Nzc3MDkzfQ.3acXWCUnp2NM0lcQNrxL-VEDE-5C8FHOzfc_9XfTwbs"
const supabase = createClient(supabaseUrl, supabaseKey)

export {supabase}