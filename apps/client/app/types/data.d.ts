// Define the interface for the store's state
interface Data {
  topic: string;
  passage: string;
}

interface DataState {
  data: Data;
  updateData: (data: Data) => void;
  resetData: () => void;
}

export type { Data, DataState };
