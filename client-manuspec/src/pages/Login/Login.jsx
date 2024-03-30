import "./Login.scss";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";

function Login() {
  //navigate to dashboard
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const goToDashboard = (event) => {
    event.preventDefault();

    //form validation
    if (document.querySelector(".login__username").value === "") {
      setOpen(true);
      return;
    }

    if (document.querySelector(".login__password").value === "") {
      setOpen(true);
      return;
    }
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
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Please enter the correct username and password.
          </Alert>
        </Snackbar>
      </div>
      <section className="login__account">
        <p className="login__user-text">Username: admin</p>
        <p className="login__user-pass">Password: pass</p>
      </section>
    </>
  );
}

export default Login;
