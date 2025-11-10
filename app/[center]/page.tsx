"use client";

import { useParams } from "next/navigation";

export default function CenterPage() {
  const { center } = useParams();
  return <div>{center} Page</div>;
}
