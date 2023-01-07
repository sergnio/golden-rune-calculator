import SoulCounter from "components/organisms/SoulCounter";
import useSoulCounter from "components/organisms/SoulCounter/useSoulCounter";

const Index = () => {
  const props = useSoulCounter();
  return <SoulCounter {...props} />;
};

export default Index;
