import { BlogContent } from "components";
import { addFavorite, useAppDispatch } from "app";
import { BlogItem } from "types";
import { StyledBlogList } from "./styled";

interface BlogListProps {
  list: BlogItem[];
}

export const BlogList = ({ list }: BlogListProps) => {
  const dispatch = useAppDispatch();

  const handleAddToFavorites = (article: BlogItem) => {
    dispatch(addFavorite(article));
  };

  return (
    <StyledBlogList>
      {list.map((blogItem) => (
        <BlogContent
          blogItem={blogItem}
          key={blogItem.id}
          onClick={handleAddToFavorites}
        />
      ))}
    </StyledBlogList>
  );
};
