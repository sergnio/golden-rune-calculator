import Link from "next/link";
import { Routes } from "../../../infrastructure/routes";

export default () => (
  <header>
    <ul>
      <ul>
        <Link href={Routes.home}>simple calculator</Link>
        <Link href={Routes.advancedRouteHeldRunesEntry}>
          advanced calculator
        </Link>
      </ul>
    </ul>
  </header>
);
