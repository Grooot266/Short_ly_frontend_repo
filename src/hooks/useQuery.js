import { useQuery } from "@tanstack/react-query"
import api from "../api/api";



export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ['url-totalclick'],
    queryFn: async () => {
      const response = await api.get(
        "/api/urls/totalClicks?startDate=2025-01-01&endDate=2025-12-31",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      return response;
    },
    select: (data) => {
      // Convert the data object into an array as desired
      const convertToArray = Object.keys(data.data).map((key) => ({
        clickDate: key,
        count: data.data[key],
      }));
      return convertToArray;
    },
    onError,
    staleTime: 5000,
  });
};