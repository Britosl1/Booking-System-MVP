import { NextResponse } from "next/server";
import { mockCenters } from "../mockdata";

export async function GET() {
  return NextResponse.json(mockCenters);
}

