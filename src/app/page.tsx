"use client";

import { useState } from "react";

type Pages = "enter-runes" | "count-runes" | "summary";

export default function Home() {
  const [page, setPage] = useState<Pages>("enter-runes");

  return (
    <div>
      <main>
        {page === "enter-runes" && (
          <EnterRunes nextPage={() => setPage("count-runes")} />
        )}
        {page === "count-runes" && (
          <CountRunes
            prevPage={() => setPage("enter-runes")}
            nextPage={() => setPage("summary")}
          />
        )}
        {page === "summary" && (
          <Summary prevPage={() => setPage("count-runes")} />
        )}
      </main>
    </div>
  );
}

const EnterRunes = ({ nextPage }: { nextPage: () => void }) => {
  return (
    <div>
      <div>Enter Runes</div>
      <Pagination nextPage={nextPage} />
    </div>
  );
};

const CountRunes = ({
  prevPage,
  nextPage,
}: {
  nextPage: () => void;
  prevPage: () => void;
}) => {
  return (
    <div>
      <div>Count Runes</div>
      <Pagination prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
};

const Summary = ({ prevPage }: { prevPage: () => void }) => {
  return (
    <div>
      <div>Summary</div>
      <Pagination prevPage={prevPage} />
    </div>
  );
};

const Pagination = ({
  prevPage,
  nextPage,
}: {
  nextPage?: () => void;
  prevPage?: () => void;
}) => {
  return (
    <div>
      {prevPage ? <button onClick={prevPage}>Prev</button> : <div />}
      {nextPage ? <button onClick={nextPage}>Next</button> : <div />}
    </div>
  );
};
