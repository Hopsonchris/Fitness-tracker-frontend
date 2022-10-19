import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";
import {
  Activites,
  Home,
  Login,
  Navbar,
  Profile,
  Register,
  Routines,
} from "./components";

const App = () => {
  const [activites, setActivies] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem("token");
    setToken("");
    setUser({});
  }

  async function fetchPosts() {
    const results = await getPosts(token);
    setPosts(results.data.posts);
  }

  async function getMe() {
    const storedToken = window.localStorage.getItem("token");

    if (!token) {
      if (storedToken) {
        setToken(storedToken);
      }
      return;
    }

    const results = await getUserDetails(token);
    if (results.success) {
      setUser(results.data);
    } else {
      console.log(results.error.message);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [token]);

  useEffect(() => {
    getMe();
  }, [token]);

  return (
    <div>
      <Navbar logout={logout} token={token} />
      <Activites />
      <Routines />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route
          path="/register"
          element={
            <Register setToken={setToken} token={token} navigate={navigate} />
          }
        />
        <Route
          path="/login"
          element={<Login setToken={setToken} navigate={navigate} />}
        />
      </Routes>
    </div>
  );
};

const container = document.querySelector("#container");
const root = ReactDom.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
