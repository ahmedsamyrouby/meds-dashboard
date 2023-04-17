import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-form-container">
      <header className="login-header">
        <h1>Login</h1>
      </header>
      <form action="" className="login-form">
        <div className="email">
          <label htmlFor="email-input">E-mail</label>
          <input type="email" name="" id="email-input" />
        </div>
        <div className="password">
          <label htmlFor="password-input">Password</label>
          <input type="password" name="" id="password-input" />
        </div>
        <div className="login-btn-container">
          <button type="submit" className="login-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
