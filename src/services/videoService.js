import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://noijmkmdfmuesuvdkvqq.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vaWpta21kZm11ZXN1dmRrdnFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNjI0NTEsImV4cCI6MTk4MzkzODQ1MX0.4SDfh0E1En6CV8bSjalmAXYWI7xQZh1TLzHsFBIvrJ4";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}