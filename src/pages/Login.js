import "./FrontPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="bodyParagraph">
        <h1>Login</h1>
        <p>
          <a href="/register" id="register">
            Don't have an account?
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
