import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";
import useTitle from "../../Hooks/useTitle";

// import useToken from "../../Hooks/useToken";


const Login = () => {
  useTitle("Login");
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loginUserEmail, setLoginUserEmail] = useState("");
//   const [token] = useToken(loginUserEmail);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
  

  
  const handleLogin = (data) => {
    setLoginError("");
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(data.email);

        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message.split("/")[1]);
      });
  };
  return (
    <div className="flex justify-center  my-44">
      <div className="card   w-full max-w-sm shadow-2xl bg-base-100">
        <div className="mt-5">
          <h1 className="text-4xl font-serif font-bold text-primary">
            Please Login{" "}
          </h1>
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                {...register("email", { required: true })}
                className="input input-bordered bg-blue-100"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
                className="input input-bordered bg-blue-100"
              />
              {errors.password && (
                <p className="text-warning">
                  Password should be at least 6 character{" "}
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
            <div>
              <p>
                Do not have an account? Please{" "}
                <Link className="text-warning" to="/signup">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
