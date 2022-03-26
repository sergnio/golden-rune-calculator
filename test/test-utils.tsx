// test-utils.js
import { render } from "@testing-library/react";
import { FC } from "react";

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers: FC = ({ children }) => <>{children}</>;

const customRender = (ui: any, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
