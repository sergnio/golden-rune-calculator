import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

const screens = ["enter-runes", "count-runes", "summary"] as const;
type Screens = (typeof screens)[number];

type ScreensState = {
  screen: Screens;
  prevScreen?: () => void;
  nextScreen?: () => void;
  setScreen: Dispatch<SetStateAction<Screens>>;
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

export const Screens = ({ children }: PropsWithChildren) => {
  const [screen, setScreen] = useState<Screens>(screens[0]);
  const screenIndex = screens.indexOf(screen);

  const prevScreen =
    screenIndex > 0 ? () => setScreen(screens[screenIndex - 1]) : undefined;

  const nextScreen =
    screenIndex < screens.length - 1
      ? () => setScreen(screens[screenIndex + 1])
      : undefined;

  return (
    <ScreensProvider
      value={{
        screen,
        prevScreen,
        nextScreen,
        setScreen,
      }}
    >
      {children}
    </ScreensProvider>
  );
};
