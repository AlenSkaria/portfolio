import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      <div className="text-center space-y-10">
        <div>skaria andrews</div>
        <div className="fixed bottom-15 right-15">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
