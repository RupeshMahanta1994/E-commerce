import React from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import authActions from "../../store/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();

  //Login Function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <>
      <div className=" w-full h-[100vh] flex items-center justify-center">
        <form className="loginForm space-y-2" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="test@test.com" />
          </div>
          <div className="flex flex-col  space-y-1">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <button
            className="  w-full uppercase bg-blue-600 text-xs text-white font-semibold px-8 py-4 mt-4 tracking-widest flex items-center justify-center gap-4 rounded-sm hover:bg-red-500 transition-all"
            type="submit"
          >
            login
          </button>
          <div className="text-center ">
            If not Registered?{" "}
            <a
              href="/register"
              className="text-blue-600 hover:text-red-500 underline transition-colors"
            >
              click here
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
