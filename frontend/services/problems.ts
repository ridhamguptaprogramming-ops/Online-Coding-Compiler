import { createClient, isSupabaseConfigured } from "../lib/supabase/server";
import type { Problem } from "../types/database";

export async function getProblems(): Promise<Problem[]> {
  if (!isSupabaseConfigured()) return [];

  const supabase = createClient();
  const { data, error } = await supabase
    .from("problems")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Failed to load problems:", error.message);
    return [];
  }

  return data as Problem[];
}

export async function getProblemBySlug(slug: string): Promise<Problem | null> {
  if (!isSupabaseConfigured()) return null;

  const supabase = createClient();
  const { data, error } = await supabase
    .from("problems")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) {
    console.error("Failed to load problem:", error.message);
    return null;
  }

  return data as Problem;
}
