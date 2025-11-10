import { NextResponse } from "next/server";
import { mockCenters } from "../../mockdata";

export async function GET(
  _req: Request,
  context: any
) {
  try {
    // Handle both async (Next.js 16) and sync (Vercel) params
    let params = context.params;
    if (params && typeof params.then === 'function') {
      params = await params;
    }
    
    const id = params?.center;

    if (!id) {
      return NextResponse.json({ error: "No center ID provided" }, { status: 400 });
    }

    const center = mockCenters.find((c) => c.id === id);

    if (!center) {
      return NextResponse.json({ error: "Center not found" }, { status: 404 });
    }

    return NextResponse.json(center);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
