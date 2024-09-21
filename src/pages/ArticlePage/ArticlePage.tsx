import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import articleStore from "../../store/ArticlesStore";
import userStore from "../../store/UserStore";
import { EditArticleModal } from "../../components/EditArticleModal/EditArticleModal";

export const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articleStore.articles.find((a) => a.id.toString() === id);
  const [comment, setComment] = useState("");
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleCommentSubmit = () => {
    if (article && userStore.user) {
      articleStore.addComment(article.id, userStore.user.username, comment);
      setComment("");
    }
  };

  if (!article) {
    return <div>Статья не найдена.</div>;
  }

  return (
    <Container>
      <Typography variant="h4">{article.title}</Typography>
      <Typography variant="body1">{article.description}</Typography>
      <Typography variant="body2" color="textSecondary">
        Автор: {article.author}
      </Typography>

      {userStore.user?.username === article.author && (
        <Box marginY={2}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setEditModalOpen(true)}
          >
            Редактировать
          </Button>
        </Box>
      )}

      <Typography variant="h6">Комментарии:</Typography>
      {article.comments.length > 0 ? (
        article.comments.map((comment, index) => (
          <Typography key={index} variant="body2">
            <b>{comment.author}</b>: {comment.text}
          </Typography>
        ))
      ) : (
        <Typography variant="body2">Нет комментариев.</Typography>
      )}

      <TextField
        label="Ваш комментарий"
        variant="outlined"
        fullWidth
        value={comment}
        style={{ marginTop: "16px" }}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCommentSubmit}
        style={{ marginTop: "16px" }}
      >
        Оставить комментарий
      </Button>
      <EditArticleModal
        open={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        articleId={article.id}
      />
    </Container>
  );
};
