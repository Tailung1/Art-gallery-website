import { useTheme } from "../useProvider"

export default function Home() {
    const { toggleTheme } = useTheme();
  return (
    <div>
        <button onClick={toggleTheme}>Change Theme</button>
        <h1 className="text-red-700 dark:text-blue-700">Title</h1>
    </div>
  )
}
