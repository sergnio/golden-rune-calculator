"use client";

import { EnterRunes } from "@/components/EnterRunes";
import { RuneCalc } from "@/components/RuneCalc";
import { CountRunes, Summary } from "@/components/Screens";
import { useState } from "react";

type Screens = "enter-runes" | "count-runes" | "summary";

export default function Home() {
  const [screen, setScreen] = useState<Screens>("enter-runes");

  return (
    <RuneCalc>
      <main>
        {screen === "enter-runes" && (
          <EnterRunes nextScreen={() => setScreen("count-runes")} />
        )}
        {screen === "count-runes" && (
          <CountRunes
            prevScreen={() => setScreen("enter-runes")}
            nextScreen={() => setScreen("summary")}
          />
        )}
        {screen === "summary" && (
          <Summary prevScreen={() => setScreen("count-runes")} />
        )}
      </main>
    </RuneCalc>
  );
}
