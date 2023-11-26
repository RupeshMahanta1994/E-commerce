import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, Login, Register } from "./Pages/index";
import { Navbar, Footer } from "./Components/index";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {isLoggedIn && isLoggedIn ? (
            <>
              <Route path="/" element={<HomePage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
            </>
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
