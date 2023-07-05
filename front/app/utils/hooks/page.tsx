import { useState, useEffect, DependencyList } from "react";

// Type pour les options de la fonction fetch
interface FetchOptions extends RequestInit {}

// Type pour le retour de la fonction useFetch
interface FetchReturn<T> {
  isLoading: boolean;
  data: T;
  error: any;
}

// ******************* useFetch *******************
export function useFetch<T = any>(
  url: string | undefined,
  options?: FetchOptions
): FetchReturn<T> {
  const [data, setData] = useState<T | {}>({});
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(
    () => {
      if (!url) return;
      setLoading(true);
      async function fetchData() {
        let response;
        let respData;
        try {
          console.log("url", url);
          response = await fetch(url, options);
          respData = await response.json();
          setData(respData);
        } catch (error) {
          console.log(error);
          setError(error);
          if (typeof response !== "undefined" && respData) {
            const errorData = {
              status: response.status,
              message: respData.message || "Something went wrong",
            };
            console.log(errorData);
            setError(errorData);
          }
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url] as DependencyList
  );

  return { isLoading, data, error };
}
