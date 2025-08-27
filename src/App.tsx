import HomePage from "@pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
