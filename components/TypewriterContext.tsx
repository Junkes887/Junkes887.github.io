import { createContext, useContext, useState } from "react";

type TypewriterContextType = {
  current: number;
  next: () => void;
};

const TypewriterContext = createContext<TypewriterContextType>({
  current: 0,
  next: () => {},
});

export function TypewriterProvider({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => prev + 1);

  return (
    <TypewriterContext.Provider value={{ current, next }}>
      {children}
    </TypewriterContext.Provider>
  );
}

export const useTypewriterManager = () => useContext(TypewriterContext);
