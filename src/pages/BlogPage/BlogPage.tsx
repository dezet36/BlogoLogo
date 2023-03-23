import { BlogContent, Modal, Slider, Spinner } from "components";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app";
import { BlogItem } from "types";
import { BlogContentWrap, RecommendationsTitle, SliderWrap } from "./styled";

export const BlogPage = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const { id = "" } = useParams();

  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleCloseModal = () => {
    setIsActiveModal(true);
  };

  return (
    <BlogContentWrap>
      <BlogContent
        blogItem={location.state.item}
        onClick={handleAddToFavorites}
      />
      <SliderWrap>
        <RecommendationsTitle>Recommendations</RecommendationsTitle>
        <Slider blogItem={location.state.items} />
      </SliderWrap>
    </BlogContentWrap>
  );
};
