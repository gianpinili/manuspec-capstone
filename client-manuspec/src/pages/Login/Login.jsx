import "./Login.scss";

function Login() {
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
          <button className="login__button">Sign In</button>
        </form>
      </div>
    </>
  );
}

export default Login;
