import apiClient from "./client";
import { Property } from "@/types/property";
import { CreatePropertyDto } from "@/types/createPropertyDto";

export const propertyService = {
  getAll: async (page: number, limit: number, search: string) => {
    try {
      const response = await apiClient.get<{
        properties: Property[];
        total: number;
      }>("/property", {
        params: { page, limit, search },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching properties:", error);
      throw new Error("Failed to fetch properties");
    }
  },

  getById: async (id: string) => {
    try {
      const response = await apiClient.get<Property>(`/property/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching property details:", error);
      throw new Error("Failed to fetch property details");
    }
  },

  create: async (propertyData: CreatePropertyDto) => {
    try {
      const response = await apiClient.post<Property>(
        "/property",
        propertyData
      );
      return response.data;
    } catch (error) {
      console.error("Error creating property:", error);
      throw new Error("Failed to create property");
    }
  },
};
