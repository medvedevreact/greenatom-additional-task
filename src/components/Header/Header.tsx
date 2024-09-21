import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import userStore from "../../store/UserStore";
import { observer } from "mobx-react-lite";

const Header: React.FC = observer(() => {
  const navigate = useNavigate();

  const handleLogout = () => {
    userStore.clearUser();
    navigate("/");
  };

  const handleCreateArticle = () => {
    navigate("/addArticle");
  };

  return (
    <AppBar position="static" style={{ marginBottom: "16px" }}>
      <Toolbar>
        <Typography
          variant="h6"
          style={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/main")}
        >
          GREENATOM BLOG
        </Typography>
        <Box display="flex" alignItems="center">
          <IconButton
            color="inherit"
            onClick={handleCreateArticle}
            style={{ marginRight: "16px" }}
          >
            <AddIcon />
          </IconButton>
          <Avatar style={{ marginRight: "8px" }}></Avatar>
          <Typography variant="body1" style={{ marginRight: "16px" }}>
            {userStore.user?.username}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Выход
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
