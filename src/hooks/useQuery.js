import { useQuery } from "@tanstack/react-query"

export const useFetctTotalClicks = (token, onError) => {
    return useQuery("url-totalclick", 
        async () => {
            return await api .get("http://localhost:8080/api/urls/totalClicks?startDate=2025-01-01&endDate=2025-12-31")
        }, 
        {})
} 