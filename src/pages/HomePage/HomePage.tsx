import { Tabs } from "components";
import { useToggle } from "hooks";
import React, { useState } from "react";
import { HomePageWrap, Title, SortBlock, TabsBlock } from "./styled";

export const HomePage = () => {
  const [isActiveTab, setActiveTab] = useToggle();
  const [tabValue, setTabValue] = useState<string>("tab");

  const handleTabActive = (value: string) => {
    setTabValue(value);
    setActiveTab();
  };
  return (
    <HomePageWrap>
      <Title>Blog</Title>
      <SortBlock>
        <TabsBlock>
          <Tabs
            tabName="Articles"
            setTab={() => handleTabActive("Articles")}
            isActive={!isActiveTab}
          ></Tabs>
          <Tabs
            tabName="News"
            setTab={() => handleTabActive("News")}
            isActive={!isActiveTab}
          ></Tabs>
        </TabsBlock>
      </SortBlock>
    </HomePageWrap>
  );
};
