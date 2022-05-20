import { motion } from "framer-motion";
import Container from "../../Components/Container";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";
import animation from "../../helpers/animation";
import { useState } from "react";
import { loginValidate } from "../../helpers/validate";
import { Helmet } from "react-helmet";
export default function Login() {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const validateResult = loginValidate(userInput);
    setErrors(validateResult);
    if (validateResult[0].success && validateResult[1].success) {
      //   dispatch(login(userInput.email, userInput.password));
      console.log(userInput);
    }
  };
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login - Quizzly</title>
      </Helmet>
      <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
        className="logincontainer"
      >
        <motion.div className="logincard">
          <h1 className="text-center">Login 👋</h1>
          <Input
            type="email"
            error={errors[0]?.error}
            success={errors[0]?.success}
            errorMessage={errors[0]?.message}
            label={"Enter Email"}
            placeholder="test@gmail.com"
            name="email"
            onChange={handleChange}
          />
          <Input
            type="password"
            error={errors[1]?.error}
            success={errors[1]?.success}
            errorMessage={errors[1]?.message}
            label={"Enter Password"}
            placeholder="***********"
            name="password"
            onChange={handleChange}
          />
          <div className="remember-options">
            <div className="remember">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="true"
                className="checkbox"
              />
              <label htmlFor="checkbox">Remember Me</label>
              <br />
            </div>
            <div className="forgot-passwor">
              <Link to="/forget">
                <p>Forgot Password?</p>
              </Link>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="btn full-width mt-10 inherit-font loading-btn"
          >
            Login
          </button>
          <p className="text-center mt-10 text-white">
            New User? <Link to="/signup">Signup Now</Link>{" "}
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
}
