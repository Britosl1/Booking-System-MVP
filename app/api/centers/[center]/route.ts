import { NextRequest, NextResponse } from "next/server";
import { mockCenters } from "../../mockdata";

// Keep this to ensure dynamic routing
export const dynamic = 'force-dynamic'; 

export async function GET(
  request: NextRequest,
  // Keep the signature that works for your environment:
  { params }: { params: Promise<{ center: string }> } 
) {
  // 1. Retrieve the ID (Keep your working await structure)
  const awaitedParams = await params;
  
  // 2. Safely access the ID, ensuring it's a string
  const id = awaitedParams?.center; 

  // --- Start Robust String Processing ---

  // 3. Check for undefined/null ID early
  if (!id) {
    return NextResponse.json({ error: "Missing Center ID" }, { status: 400 });
  }

  // 4. Clean up the ID: trim whitespace/slashes, and convert to lowercase for matching
  const cleanId = id.trim().toLowerCase(); 

  // --- End Robust String Processing ---

  // 5. Use a case-insensitive match (compare the cleaned ID to the lowercase IDs in mock data)
  const center = mockCenters.find((c) => c.id.toLowerCase() === cleanId);

  // You should verify that the IDs in mockCenters are also lowercase (e.g., 'radiant-glow-studio')
  // which they appear to be in your example. If they were mixed-case, the toLowerCase() call ensures a match.

  if (!center) {
    // If you could see the logs on Vercel, logging 'cleanId' here would confirm the value
    return NextResponse.json({ 
      error: `Center not found for ID: ${cleanId}` 
    }, { status: 404 });
  }

  return NextResponse.json(center);
}