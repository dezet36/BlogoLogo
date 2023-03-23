import { useNavigate } from "react-router-dom";
import { useAppSelector, getUserInfo, getFavotites } from "app";
import { BlogItem } from "types";
import {
  NavigationLink,
  Title,
  Image,
  Text,
  OuterLink,
  OuterLinkWrapper,
  Wrapper,
  FavoritesButton,
  LinksWrapper,
} from "./styled";

interface BlogContentProps {
  blogItem: BlogItem;
  onClick: (blogItem: BlogItem) => void;
}

export const BlogContent = ({ blogItem, onClick }: BlogContentProps) => {
  const { id, imageUrl, title, summary, url } = blogItem;
  const navigate = useNavigate();
  const { isAuth } = useAppSelector(getUserInfo);
  const { results } = useAppSelector(getFavotites);
  const isInFavorites = results.map((favorite: { id: number }) => favorite.id);

  const handleBackHome = () => {
    navigate(-1);
  };
  const handleChangeFavorites = () => {
    onClick(blogItem);
  };

  return (
    <Wrapper>
      <NavigationLink onClick={handleBackHome}>
        Home <span> / Post {id}</span>
      </NavigationLink>
      <Title>{title}</Title>
      <Image src={imageUrl} alt={title} onError={setNotFoundImg} />
      <Text>{summary}</Text>
      <LinksWrapper>
        <FavoritesButton onClick={handleChangeFavorites}>
          {isAuth && isInFavorites ? "+" : "-"}
        </FavoritesButton>
        <OuterLinkWrapper>
          <OuterLink href={url} target="_blank">
            Learn more
          </OuterLink>
        </OuterLinkWrapper>
      </LinksWrapper>
    </Wrapper>
  );
};
