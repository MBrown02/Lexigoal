import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PrimaryTextField from "./components/PrimaryTextField/PrimaryTextField";
import PracticePage from "./pages/PracticePage/PracticePage";
import DefaultPage from "./pages/HomePage/HomePage";
import "./styles.css";
import DecksPage from "./pages/DeckPage/DecksPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";


function App(){
    return (
        <>
        <div className="grid-container">
            
            <Router>
                <div className="grid-item"><Navbar /></div>
                <Routes>
                    <Route path="/" element={<DefaultPage />} />
                    <Route path="/practice" element={< PracticePage/>} />
                    <Route path="/decks" element={<DecksPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </Router>
        </div>
        </>
    );
}

export default App;