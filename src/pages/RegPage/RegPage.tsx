import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import userStore from "../../store/UserStore";
import { observer } from "mobx-react-lite";

export const RegPage: React.FC = observer(() => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hasError = false;
    const newErrors = { username: "", email: "", password: "" };

    if (!username.trim()) {
      newErrors.username =
        "Логин обязателен и не может состоять только из пробелов";
      hasError = true;
    }
    if (!email.trim()) {
      newErrors.email =
        "Почта обязательна и не может состоять только из пробелов";
      hasError = true;
    }
    if (!password.trim()) {
      newErrors.password =
        "Пароль обязателен и не может состоять только из пробелов";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    userStore.setUser(username, email);
    navigate("/main");
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={3} style={{ padding: "16px", width: "100%" }}>
        <Typography variant="h5" align="center">
          Регистрация
        </Typography>
        <form onSubmit={handleRegister} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Логин"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrors({ ...errors, username: "" });
            }}
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Почта"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: "" });
            }}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Пароль"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: "" });
            }}
            error={!!errors.password}
            helperText={errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "16px" }}
          >
            Зарегистрироваться
          </Button>
        </form>
        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "16px" }}
        >
          <Link onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Уже зарегистрированы? Войдите
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
});
