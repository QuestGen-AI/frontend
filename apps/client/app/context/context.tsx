import { createContext } from "react";

export interface DataContextType {
  data: string | null;
  setData: React.Dispatch<React.SetStateAction<string | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined,
);
