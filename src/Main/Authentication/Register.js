import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signInError, setSignInError] = useState("");

  const handleSignin = (data) => {
    console.log(data);
    setSignInError("");
    signUp(data.email, data.password)
      .then((result) => {
        saveUserDb(data?.name, data?.email);

        toast.success("Account created Succesfully");
        navigate("/addtask");
      })
      .catch((error) => {
        console.log(error.message);
        setSignInError(error.message.split("/")[1]);
      });
  };

  const saveUserDb = (name, email) => {
    const user = { name, email };
    fetch("https://task-hum-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
      });
  };
  return (
    <div className="bg-cyan-50 p-28">
      <div class=" mt-14 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="px-6 py-4">
          <h1 className="text-4xl font-serif font-bold text-primary">
            Please Sign UP{" "}
          </h1>

          <p class="mt-1 text-center text-gray-500 dark:text-gray-400">
            Login to your account
          </p>

          <form onSubmit={handleSubmit(handleSignin)}>
            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                name="name"
                {...register("name", { required: true })}
              />
            </div>
            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                name="email"
                {...register("email", { required: true })}
              />
            </div>

            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
                name="password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && (
                <p className="text-warning">
                  {" "}
                  {errors.password &&
                    "Password should be at least 6 character"}{" "}
                </p>
              )}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-between mt-4">
              <a
                href="#"
                class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
              >
                Forget Password?
              </a>

              <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign Up
              </button>
              {signInError && <p className="text-red-600">{signInError}</p>}
            </div>
          </form>
        </div>

        <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span class="text-sm text-gray-600 dark:text-gray-200">
            Don't have an account?{" "}
          </span>

          <Link
            to="/login"
            class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
