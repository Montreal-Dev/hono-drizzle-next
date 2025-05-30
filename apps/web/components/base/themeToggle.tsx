"use client";

import { useTheme } from "next-themes";
import { DarkMode } from "../icons/default";
import { Button } from "@workspace/ui/components/button";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (resolvedTheme === "dark") setTheme("light");
    if (resolvedTheme === "light") setTheme("dark");
  };

  return (
    <Button
      type="button"
      aria-label="toggle-black-mode"
      className="cursor-pointer"
      onClick={toggleTheme}
    >
      <DarkMode className="relative top-0 w-5 h-5 rounded-sm fill-background" />
    </Button>
  );
}
