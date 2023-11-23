import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PrimaryTextField from "./components/PrimaryTextField/PrimaryTextField";
import PracticePage from "./pages/PracticePage";
import DefaultPage from "./pages/DefaultPage";
import "./styles.css";


function App(){
    return (
        <>
        <div className="grid-container">
            
            <Router>
                <div className="grid-item"><Navbar /></div>
                <Routes>
                    <Route path="/" element={<DefaultPage />} />
                    <Route path="/practice" element={< PracticePage/>} />
                    <Route path="/decks" element={<PrimaryTextField />} />
                    <Route path="/settings" element={<PrimaryTextField />} />
                </Routes>
            </Router>
        </div>
        </>
    );
}

export default App;