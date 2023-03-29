import {
  Tabs,
  CustomSelect,
  TabsNames,
  options,
  LoaderCustom,
} from "components";
import { useToggle } from "hooks";
import React, { useState } from "react";
import { SingleValue } from "react-select";
import { Option } from "types";
import { apiConfigPublic } from "api";
import {
  fetchArticles,
  fetchNews,
  getAllArticles,
  useAppDispatch,
  useAppSelector,
} from "app";
import {
  HomePageWrap,
  Title,
  SortBlock,
  TabsBlock,
  SortTimeWrap,
  BlogList,
} from "./styled";

export const HomePage = () => {
  const [isActiveTab, setActiveTab] = useToggle();
  const [tabValue, setTabValue] = useState<string>("blogs");
  const [option, setOption] = useState(options[0]);
  const [requestParams, setRequestParams] = useState({ page: 0, current: 1 });

  const handleTabActive = (value: string) => {
    setTabValue(value);
    setActiveTab();
  };

  const handleSelect = (option: SingleValue<Option | null | any>): void => {
    setOption(option);
  };

  const data = apiConfigPublic.getAllBlogs;

  const { articles, news, error, isLoading } = useAppSelector(getAllArticles);

  return (
    <HomePageWrap>
      <Title>Blog</Title>
      <SortBlock>
        <TabsBlock>
          <Tabs
            tabName="Articles"
            setTab={() => handleTabActive("articles")}
            isActive={!isActiveTab}
          ></Tabs>
          <Tabs
            tabName="News"
            setTab={() => handleTabActive("blogs")}
            isActive={!isActiveTab}
          ></Tabs>
        </TabsBlock>
        <SortTimeWrap>
          {tabValue === TabsNames.ARTICLE_VALUE && (
            <CustomSelect handleSelect={handleSelect} />
          )}
          {tabValue === TabsNames.NEWS_VALUE && (
            <CustomSelect handleSelect={handleSelect} />
          )}
        </SortTimeWrap>
      </SortBlock>
      <BlogList>{isLoading ? <LoaderCustom /> : <div></div>}</BlogList>
    </HomePageWrap>
  );
};
