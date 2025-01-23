import { createContext, useContext, useState } from "react";
import { EnterRunes } from "./EnterRunes";
import { Summary } from "./Summary";
import StickyFooter from "./StickyFooter";
import { RuneList } from "./RuneList";

const screens = ["enter-runes", "count-runes", "summary"] as const;
type Screens = (typeof screens)[number];

type ScreensState = {
  screen: Screens;
  prevScreen?: () => void;
  nextScreen?: () => void;
};

const ScreensContext = createContext<ScreensState | undefined>(undefined);
const ScreensProvider = ScreensContext.Provider;

export const useScreens = () => {
  const context = useContext(ScreensContext);

  if (context === undefined) {
    throw new Error("useScreens must be within ScreensContext");
  }

  return context;
};

export const Screens = () => {
  const [screen, setScreen] = useState<Screens>(screens[0]);
  const screenIndex = screens.indexOf(screen);

  const prevScreen =
    screenIndex > 0 ? () => setScreen(screens[screenIndex - 1]) : undefined;

  const nextScreen =
    screenIndex <= screens.length
      ? () => setScreen(screens[screenIndex + 1])
      : undefined;

  return (
    <ScreensProvider
      value={{
        screen,
        prevScreen,
        nextScreen,
      }}
    >
      <main>
        {screen === "enter-runes" && <EnterRunes />}
        {screen === "count-runes" && <RuneList />}
        {screen === "summary" && <Summary />}
        <StickyFooter />
      </main>
    </ScreensProvider>
  );
};
