"use client";
import { useFetchTest } from "@/hooks/querys/test";
import client from "@/utils/lib/httpClient";
import { useEffect, useState } from "react";

const Notification = () => {
  const [data2, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  // GET 요청 예제
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await client.get("/posts");
        if (responseData) {
          setData(responseData);
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  //tanstack-query 예제
  const { data, isLoading } = useFetchTest();
  return (
    <>
      <div className="bg-gray-500 p-8 rounded h-60 overflow-auto">
        <h1>실시간 알림</h1>

        <h2>API 요청 결과</h2>
        {data ? (
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(data2, null, 2)}
          </pre>
        ) : (
          <h1 className="text-yellow-400 text-4xl">Loading...</h1>
        )}
      </div>
    </>
  );
};

export default Notification;
