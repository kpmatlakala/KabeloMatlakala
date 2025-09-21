// components/ThemeToggle.tsx
"use client";

import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-5 w-5" />;
      case 'dark':
        return <Moon className="h-5 w-5" />;
      case 'system':
        return <Monitor className="h-5 w-5" />;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
    >
      {getIcon()}
    </button>
  );
}

// Alternative: Dropdown theme selector
// export function ThemeSelector() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <select
//       value={theme}
//       onChange={(e) => setTheme(e.target.value as Theme)}
//       className="px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
//     >
//       <option value="light">Light</option>
//       <option value="dark">Dark</option>
//       <option value="system">System</option>
//     </select>
//   );
// }