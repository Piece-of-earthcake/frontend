const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

async function httpClient<T, E extends Error>(
  url: string,
  method: HttpMethod,
  data?: object
): Promise<T> {
  const headers = {
    'Content-Type': 'application/json'
  };

  const config = {
    method,
    headers,
    body: data ? JSON.stringify(data) : null
  };

  try {
    const response = await fetch(`${apiUrl}${url}`, config);

    // TODO:에러메시지 부분 확인 필요
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'API 요청이 실패했습니다.');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('API 요청 에러:', (error as E)?.message);
    throw error;
  }
}

const client = {
  get: async <T>(url: string) => httpClient<T, Error>(url, HttpMethod.GET),
  post: async <T>(url: string, data?: object) =>
    httpClient<T, Error>(url, HttpMethod.POST, data),
  put: async <T>(url: string, data?: object) =>
    httpClient<T, Error>(url, HttpMethod.PUT, data),
  delete: async <T>(url: string) => httpClient<T, Error>(url, HttpMethod.DELETE)
};

export default client;
