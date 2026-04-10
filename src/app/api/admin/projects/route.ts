import { NextResponse } from "next/server";

export async function GET() {
  // In production, fetch from Supabase
  return NextResponse.json({ projects: [] });
}

export async function POST() {
  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
}
