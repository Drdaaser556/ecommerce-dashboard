import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <ThemeToggle />
    </nav>
  );
}