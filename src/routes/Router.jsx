import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import GamePage from "../pages/GamePage";
import REDIRECT from "../shared/redirect";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path={REDIRECT.GAME_ROUTE} element={<GamePage />} />
    </Routes>
  );
};

export default Router;
