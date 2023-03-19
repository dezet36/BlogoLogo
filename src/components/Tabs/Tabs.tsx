import { TabCustom } from "./styled";

interface TabsProps {
  tabName: string;
  setTab: () => void;
  isActive: boolean;
}

export const Tabs = ({ setTab, tabName, isActive }: TabsProps) => {
  return (
    <TabCustom to={""} onClick={setTab} $isActive={isActive}>
      {tabName}
    </TabCustom>
  );
};
