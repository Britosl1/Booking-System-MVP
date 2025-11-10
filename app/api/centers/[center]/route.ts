import { NextRequest, NextResponse } from "next/server";
import { mockCenters } from "../../mockdata";

type Params = Promise<{ center: string }> | { center: string };

export async function GET(
  request: NextRequest,
  context: { params: Params }
) {
  // Handle both Promise and non-Promise params for compatibility
  const resolvedParams = context.params instanceof Promise 
    ? await context.params 
    : context.params;
  
  const id = resolvedParams.center;

  const center = mockCenters.find((c) => c.id === id);

  if (!center) {
    return NextResponse.json({ error: "Center not found" }, { status: 404 });
  }

  return NextResponse.json(center);
}
