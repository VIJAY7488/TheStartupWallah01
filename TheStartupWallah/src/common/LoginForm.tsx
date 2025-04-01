import React, { useState, ChangeEvent, FormEvent } from "react";
import { loginFormControl } from "../Utilities/formControl";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { usePasswordVisibility } from "../context/PasswordVisibilityContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import axios from "axios";

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const { isShowPassword, toggleShowPassword } = usePasswordVisibility();
  const [error, setError] = useState("");

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitData = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.email) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!formData.password) {
      setError("Please enter the password.");
      return;
    }

    setError("");

    //Login API call
    try {
      console.log("Submitted Data:", formData);
      const response = await axios.post(
        "https://www.thestartupwallah.com/api/auth/login",
        { email: formData.email, password: formData.password }
      );

      if (response.data && response.data.message) {
        setError(response.data.message);
        return;
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        setFormData({ email: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 mt-10">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h1 className="text-xl font-bold text-gray-900 text-center mb-6">
            Login
          </h1>
          <form onSubmit={handleSubmitData} className="space-y-6">
            {loginFormControl.map((field) => (
              <div key={field.name} className="relative">
                <label
                  htmlFor={field.name}
                  className="block text-gray-900 font-medium"
                >
                  {field.label}
                </label>
                <input
                  type={
                    field.type === "password"
                      ? isShowPassword
                        ? "text"
                        : "password"
                      : field.type
                  }
                  placeholder={field.placeholder}
                  name={field.name}
                  value={formData[field.name as keyof FormData] || ""}
                  onChange={handleFormDataChange}
                  className="w-full border rounded-md p-2 mt-1 text-gray-900 outline-none focus:border-primary-600"
                />
                {field.type === "password" && (
                  <div className="flex items-center justify-between mt-1">
                    <a
                      href="#"
                      className="text-sm text-indigo-600 hover:text-indigo-500 transition sm:text-xs md:text-sm"
                    >
                      Forgot password?
                    </a>
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="absolute right-2 top-[55%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {isShowPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                  </div>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-primary text-white font-medium rounded-md py-2 hover:bg-primary/90 transition"
            >
              Login
            </button>
            <p className="text-sm text-gray-500 text-center">
              You have not created an account yet?{" "}
              <Link to="/register">
                <button className="text-primary hover:underline">
                  Sign up here
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
