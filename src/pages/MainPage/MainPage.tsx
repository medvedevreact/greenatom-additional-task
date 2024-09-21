import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import articleStore from "../../store/ArticlesStore";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleReadMore = (id: number) => {
    navigate(`/article/${id}`);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "16px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Список статей
      </Typography>
      <Grid container spacing={3}>
        {articleStore.articles.map((article) => (
          <Grid item xs={12} sm={6} md={3} key={article.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{article.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {article.description.length > 30
                    ? `${article.description.slice(0, 30)}...`
                    : article.description}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  Автор: {article.author}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleReadMore(article.id)}
                >
                  Читать
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
