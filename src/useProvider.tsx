import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
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
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark")
    }
  }, [theme]);

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
