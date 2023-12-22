import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PracticePage from "./pages/PracticePage/PracticePage";
import DefaultPage from "./pages/HomePage/HomePage";
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
                </Routes>
            </Router>
        </div>
        </>
    );
}

export default App;