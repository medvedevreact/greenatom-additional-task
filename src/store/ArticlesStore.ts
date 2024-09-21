import { makeAutoObservable } from "mobx";
import userStore from "./UserStore";

interface Comment {
  author: string;
  text: string;
}

interface Article {
  id: number;
  title: string;
  description: string;
  author: string;
  comments: Comment[];
}

class ArticleStore {
  articles: Article[] = [
    {
      id: 1,
      title: "Статья 1",
      description: "Краткое описание статьи 1.",
      author: "Ivan22",
      comments: [],
    },
    {
      id: 2,
      title: "Статья 2",
      description: "Краткое описание статьи 2.",
      author: "Miha",
      comments: [],
    },
    {
      id: 3,
      title: "Статья 3",
      description: "Краткое описание статьи 3.",
      author: "Allllex",
      comments: [],
    },
    {
      id: 4,
      title: "Статья 4",
      description: "Краткое описание статьи 4.",
      author: "tripper",
      comments: [],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addArticle(title: string, description: string) {
    const username = userStore.user?.username || "Anonymous";
    const newArticle: Article = {
      id: this.articles.length + 1,
      title,
      description,
      comments: [],
      author: username,
    };
    this.articles.push(newArticle);
  }

  addComment(articleId: number, author: string, text: string) {
    const article = this.articles.find((article) => article.id === articleId);
    if (article) {
      const newComment: Comment = { author, text };
      article.comments.push(newComment);
    }
  }
}

const articleStore = new ArticleStore();
export default articleStore;
