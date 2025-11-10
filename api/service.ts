import { Center } from "@/interfaces";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

async function fetchApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export const centersApi = {
  getAll: async (): Promise<Center[]> => {
    return fetchApi<Center[]>("/api/centers");
  },

  getById: async (id: string): Promise<Center> => {
    return fetchApi<Center>(`/api/centers/${id}`);
  },
};

