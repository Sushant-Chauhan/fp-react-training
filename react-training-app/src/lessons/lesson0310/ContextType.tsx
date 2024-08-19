export type ContextType = {
  name: string;
  updateName: (target: string) => void;
  aCallback: () => void;
};
