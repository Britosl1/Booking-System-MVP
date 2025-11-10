import { useQuery } from "@tanstack/react-query";
import { centersApi } from "../service";

export function useCenters() {
  return useQuery({
    queryKey: ["centers"],
    queryFn: centersApi.getAll,
  });
}

export function useCenter(id: string) {
  return useQuery({
    queryKey: ["center", id],
    queryFn: () => centersApi.getById(id),
    enabled: !!id,
  });
}

