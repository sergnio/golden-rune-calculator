import SoulCounter from "@/components/atoms/SoulCounter";
import useSoulCounter from "@/components/atoms/SoulCounter/useSoulCounter";

const Index = () => {
  const props = useSoulCounter();
  return <SoulCounter {...props} />;
};

export default Index;
