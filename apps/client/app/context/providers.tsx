"use client";
import { ReactNode, useState } from "react";
import { DataContext } from "./context";

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const value = { data, setData, isLoading, setIsLoading };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
