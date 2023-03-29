// export const apiConfig = {
//   articlesBaseUrl: "https://api.spaceflightnewsapi.net/v4/articles/",
//   blogsBaseUrl: "https://api.spaceflightnewsapi.net/v4/blogs/",
// };

import axios from "axios";
import { BlogItem } from "types";

class apiConfig {
  private readonly BASE_URL = "https://api.spaceflightnewsapi.net/v4";
  private readonly TOPIC = {
    articles: "articles",
    blogs: "blogs",
  };
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllBlogs(
    page: number,
    value: string,
    word: string,
    endpoint: string
  ) {
    const params = {
      _start: page,
      _limit: 12,
      _sort: value,
      _title_contains: word,
    };
    const { data } = await this.API.get<BlogItem[]>(
      this.BASE_URL + "/" + endpoint,
      { params }
    );
    return data;
  }

  async getArticleById(id: string) {
    const { data } = await this.API.get<BlogItem>(
      `${this.TOPIC.articles}/${id}`
    );
    return data;
  }

  async getNewsById(id: string) {
    const { data } = await this.API.get<BlogItem>(`${this.TOPIC.blogs}/${id}`);
    return data;
  }
}

export const apiConfigPublic = new apiConfig();
