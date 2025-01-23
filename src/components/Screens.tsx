import { Pagination } from "./Pagination";

export const Summary = ({ prevScreen }: { prevScreen: () => void }) => {
  return (
    <div>
      <div>Summary</div>
      <Pagination prevScreen={prevScreen} />
    </div>
  );
};
