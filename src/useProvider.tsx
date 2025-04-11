import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

type TTheme = "light" | "dark";

interface IContext {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IContext | undefined>(undefined);

export default function UseProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<TTheme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
