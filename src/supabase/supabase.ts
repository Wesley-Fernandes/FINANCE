import {createClient} from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPA_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPA_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing API keys for Supabase')
}

const supabase = createClient(supabaseUrl,supabaseKey);



export {supabase};
