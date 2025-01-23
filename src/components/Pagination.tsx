export const Pagination = ({
  prevScreen,
  nextScreen,
}: {
  nextScreen?: () => void;
  prevScreen?: () => void;
}) => {
  return (
    <div>
      {prevScreen ? <button onClick={prevScreen}>Prev</button> : <div />}
      {nextScreen ? <button onClick={nextScreen}>Next</button> : <div />}
    </div>
  );
};
