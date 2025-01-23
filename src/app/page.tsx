"use client";

import { RuneCalc } from "@/components/RuneCalc";
import { Screens } from "@/components/Screens";

type Screens = "enter-runes" | "count-runes" | "summary";

export default function Home() {
  return (
    <RuneCalc>
      <Screens />
    </RuneCalc>
  );
}
