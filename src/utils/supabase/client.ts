import { createBrowserClient } from '@supabase/ssr';
import { Database } from './types/database.types';

export const createClient = () =>
    createBrowserClient<Database>(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
