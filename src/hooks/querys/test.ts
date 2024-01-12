import { _getTest } from "@/apis/test";
import { useQuery } from "@tanstack/react-query";

export const useFetchTest = () => {
  return useQuery({
    queryKey: ["getTest,test"],
    queryFn: _getTest,
  });
};
