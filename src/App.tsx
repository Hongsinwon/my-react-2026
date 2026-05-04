import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <nav>
                <Link to="/">홈</Link> | <Link to="/login">로그인</Link>
            </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
