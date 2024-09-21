import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegPage } from "./pages/RegPage/RegPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage";
import Header from "./components/Header/Header";
import { AddArticlePage } from "./pages/AddArticlePage/AddArticlePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/reg" element={<RegPage />} />
        <Route
          path="/main"
          element={
            <>
              <Header />
              <MainPage />
            </>
          }
        />
        <Route
          path="/article/:id"
          element={
            <>
              <Header />
              <ArticlePage />
            </>
          }
        />
        <Route
          path="/addArticle"
          element={
            <>
              <Header />
              <AddArticlePage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
