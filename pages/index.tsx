import SoulCounter from "components/organism/SoulCounter";
import useSoulCounter from "components/organism/SoulCounter/useSoulCounter";

const Index = () => {
  const props = useSoulCounter();
  return <SoulCounter {...props} />;
};

export default Index;
