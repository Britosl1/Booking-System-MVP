import { NextRequest, NextResponse } from "next/server";
import { mockCenters } from "../../mockdata";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ center: string }> }
) {
  const id = (await params).center;

  const center = mockCenters.find((c) => c.id === id);

  if (!center) {
    return NextResponse.json({ error: "Center not found" }, { status: 404 });
  }

  return NextResponse.json(center);
}

