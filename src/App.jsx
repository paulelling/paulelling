import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Header from './Header.jsx'
import Home from './components/Home/Index.jsx'
import Guidelines from './components/Leadership/Guidelines.jsx'
import Essays from './components/Writing/Essays.jsx'
import Profile from './components/About/Profile.jsx'

function App() {
  return (
        <div className="container">
            <BrowserRouter>
                <Header></Header>
                <div className="body">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Home/Index" element={<Home />} />
                        <Route path="/Leadership/Guidelines" element={<Guidelines />} />
                        <Route path="/Writing/Essays" element={<Essays />} />
                        <Route path="/About/Profile" element={<Profile />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
  );
}

export default App;
