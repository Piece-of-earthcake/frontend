import { useQuery } from '@tanstack/react-query';

import { _getTest } from '@/apis/test';

export const useFetchTest = () => {
  return useQuery({
    queryKey: ['getTest'],
    queryFn: _getTest
  });
};
