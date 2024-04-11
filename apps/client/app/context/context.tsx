import { createContext } from "react";
import { Data } from "../types/data";

export interface DataContextType {
  data: Data | null;
  setData: React.Dispatch<React.SetStateAction<Data | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined,
);
