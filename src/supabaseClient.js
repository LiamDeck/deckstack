// src/supabaseClient.js (temporär für Tests)
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://yqcecspeyiiivdcbpttp.supabase.co';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxY2Vjc3BleWlpaXZkY2JwdHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0MDM5NjUsImV4cCI6MjA3ODk3OTk2NX0.qJguvY9QSPvaBJa83bSntk3KoPLmjerA4sOGny_swJI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

