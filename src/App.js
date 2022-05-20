import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import { GuestRoutes, ProtectedRoutes } from "./helpers/routes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "./Pages/LoadingPage";
import { loadUser, getUser } from "./Redux/Actions/auth";
function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(loadUser());
    } else {
      dispatch(getUser());
    }
  }, [token]);
  return (
    <Router>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" exact={true} element={<Home />} />
            </Route>
            <Route element={<GuestRoutes />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
