import { useEffect, useState } from "react";
import type { Meal } from "../types/mealType";

const STORAGE_KEY = "apiCallsLogs";

type ApiCallLog = {
  url: string;
  status: number;
  body: unknown;
};

const logInLocalStorage = (url: string, status: number, body: unknown) => {
  const logItem = { url, status, body };
  const payloadLog = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]",
  ) as ApiCallLog[];

  localStorage.setItem(STORAGE_KEY, JSON.stringify([...payloadLog, logItem]));
};

export const useFetch = (url: string): Meal[] => {
  const [data, setData] = useState<Meal[]>([]);

  useEffect(() => {
    let isMounted = true;

    fetch(url)
      .then(async (res) => {
        const body = (await res.json()) as Meal[];
        return [res.status, body] as const;
      })
      .then(([status, body]) => {
        if (!isMounted) return;

        logInLocalStorage(url, status, body);
        setData(body);
      })
      .catch((err) => {
        console.error("useFetch error:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return data;
};
