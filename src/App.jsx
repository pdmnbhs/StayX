import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HotelPage from "./pages/HotelPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hotel/:id" element={<HotelPage />} />
            </Routes>
        </BrowserRouter>
    )
}