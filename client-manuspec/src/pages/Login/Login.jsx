import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  //navigate to dashboard
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="login">
        <h2 className="login__title">Sign In</h2>
        <form action="" className="login__form">
          <input
            type="text"
            className="login__username"
            placeholder="Username"
          />
          <input
            type="password"
            className="login__password"
            placeholder="Password"
          />
          <button onClick={goToDashboard} className="login__button">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
