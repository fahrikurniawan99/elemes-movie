import HomePage from "@pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import DetailMoviePage from "./pages/DetailMovie";
import DetailTVSeriesPage from "./pages/DetailTvSeries";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movie/:id" element={<DetailMoviePage />} />
          <Route path="/tv/:id" element={<DetailTVSeriesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
