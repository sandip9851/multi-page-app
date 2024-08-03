
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import DetailPage from './component/DetailPage';


function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/post/:id" element={<DetailPage />} />
            </Routes>
        </Router>

  );
}


export default App;
