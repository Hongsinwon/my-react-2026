import { BrowserRouter, Routes, Route, NavLink  } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <div className="App">
      {/* 
      SPA(Single Page Application)는 서버로부터 매번 새로운 HTML을 받아오는 것이 아니라, 하나의 페이지에서 필요한 부분만 자바스크립트로 갈아 끼우는 방식입니다.
      ① HTML은 1개만 존재합니다.(index.html) ② JS가 화면을 변경합니다. ③ 서버는 JSON만 전달합니다. ④ 기존의 방식보다 빠른 화면 전환이 가능합니다.
      
      👍React Router 핵심 개념 SPA 라우팅의 핵심은 브라우져의 주소창 URL과 사용자에게 보여주는 컴포넌트를 연결(Mapping)하는 것입니다.

      ① BrowserRouter : 브라우져의 History API를 사용하여 UI와 URL을 동기화하는 컨테이너입니다. 앱의 최상위에서 감싸주어야 합니다.
      ② Routes & Route : 현재 URL에 따라 어떤 컴포넌트를 렌더링할지 정의합니다.
      ③ Link : 전통적인 태그는 페이지를 새로고침하지만, Link는 페이지의 새로고침 없이 URL만 바꿔줍니다.
      */}
      <BrowserRouter>
            <nav>
                <NavLink  to="/">홈</NavLink >
                <NavLink  to="/login">로그인</NavLink >
            </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
