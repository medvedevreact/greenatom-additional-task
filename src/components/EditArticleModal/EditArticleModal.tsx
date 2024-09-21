import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import articleStore from "../../store/ArticlesStore";

interface EditArticleModalProps {
  open: boolean;
  onClose: () => void;
  articleId: number;
}

export const EditArticleModal: React.FC<EditArticleModalProps> = ({
  open,
  onClose,
  articleId,
}) => {
  const article = articleStore.articles.find((a) => a.id === articleId);
  const [title, setTitle] = useState(article?.title || "");
  const [description, setDescription] = useState(article?.description || "");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleSave = () => {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (!trimmedDescription) {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }

    if (trimmedTitle && trimmedDescription && article) {
      article.title = trimmedTitle;
      article.description = trimmedDescription;
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" marginBottom={2}>
          Редактировать статью
        </Typography>
        <TextField
          label="Заголовок"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
          helperText={titleError ? "Заголовок не может быть пустым" : ""}
        />
        <TextField
          label="Описание"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error={descriptionError}
          helperText={descriptionError ? "Описание не может быть пустым" : ""}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          style={{ marginTop: "16px" }}
        >
          Сохранить
        </Button>
      </Box>
    </Modal>
  );
};
