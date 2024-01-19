import client from '@/utils/lib/httpClient';

export type TestData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const _getTest = async (): Promise<TestData[] | null> => {
  try {
    const response: TestData[] = await client.get('/posts');
    return response;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};
