import SoulCounter from "../components/atoms/SoulCounter";
import useSoulCounter from "../components/atoms/SoulCounter/useSoulCounter";

export default () => {
  const props = useSoulCounter();
  return <SoulCounter {...props} />;
};
