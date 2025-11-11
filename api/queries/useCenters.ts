import { useQuery } from "@tanstack/react-query";
import { centersApi } from "../service";
import { mockCenters } from "@/app/api/mockdata";

export function useCenters() {
  return useQuery({
    queryKey: ["centers"],
    queryFn: centersApi.getAll,
  });
}

export function useCenter(id: string) {
  return useQuery({
    queryKey: ["center", id],
    queryFn: async () => {
      try {
        return await centersApi.getById(id);
      } catch (error) {
        console.log("API fetch failed, falling back to mockData:", error);

        // Fallback to mockData
        const centerFromMock = mockCenters.find((center) => center.id === id);

        if (!centerFromMock) {
          throw new Error(`Center with id "${id}" not found`);
        }

        return centerFromMock;
      }
    },
    enabled: !!id,
    retry: false,
  });
}
