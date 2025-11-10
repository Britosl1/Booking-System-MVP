"use client";

import { useCenters } from "@/api/queries/useCenters";
import CenterCard from "@/components/CenterCard";
import ErrorPage from "@/components/ErrorPage";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const { data: centers, error, isLoading } = useCenters();

  if (error) {
    return <ErrorPage message={"Unexpected error :(, try again later"} />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1 className="text-center">Welcome to Booking System</h1>
      <div className="mt-12">
        <h3>Select your favorite center!</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {centers?.map((center) => (
            <CenterCard key={center?.id} {...center} />
          ))}
        </div>
      </div>
    </div>
  );
}
