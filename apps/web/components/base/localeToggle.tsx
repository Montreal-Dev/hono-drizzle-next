"use client";

import { Button } from "@workspace/ui/components/button";
import { useState } from "react";

export default function LocalToggle() {
  const [locale, setLocale] = useState("en");

  const toggleLocale = () => {
    // Replace with your own locale logic
    setLocale(locale === "en" ? "fr" : "en");
  };

  return (
    <div>
      <div className="text-right text-sm">
        <Button className="uppercase" onClick={toggleLocale}>
          {locale}
        </Button>
      </div>
    </div>
  );
}
