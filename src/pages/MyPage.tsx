import { Link, Outlet } from 'react-router-dom';

export default function MyPage() {
  return (
    <div>
      <h2>마이 페이지</h2>
      <nav>
        <Link to="profile">프로필</Link> | <Link to="settings">설정</Link>
      </nav>
      {/* 자식 라우트들이 랜더링될 위치 */}
      <Outlet />
    </div>
  );
}
