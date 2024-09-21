import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import articleStore from "../../store/ArticlesStore";
import { useNavigate } from "react-router-dom";

export const AddArticlePage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title && description) {
      articleStore.addArticle(title, description);
      navigate("/main");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "16px", marginTop: "16px" }}>
        <Typography variant="h5" gutterBottom>
          Создать новую статью
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="Название статьи"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Описание статьи"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: "16px" }}
            fullWidth
          >
            Добавить статью
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
