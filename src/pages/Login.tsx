import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={goHome}>홈으로</button>
    </>
  );
}
