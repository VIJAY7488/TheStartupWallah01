import React, { useState, ChangeEvent, FormEvent } from "react";
import { registerFormControl } from "../Utilities/formControl";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { usePasswordVisibility } from "../context/PasswordVisibilityContext";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "@/components/Navbar";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const RegisterationForm: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const { isShowPassword, toggleShowPassword } = usePasswordVisibility();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState<string>("");

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitData = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log("Submitted Data:", formData);
      const response = await register(formData.name, formData.email, formData.password);
      if (response && response.ok) {
        navigate('/login');
        setFormData({ name: "", email: "", password: "" });
      } else {
        console.error("Response error:", response);
      }
    } catch (error: any) {
      setError(error.message || "Registration failed. Please try again.");
    }
  };

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 mt-10">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-bold text-gray-900 text-center mb-6">
          Create an account
        </h1>
        <form onSubmit={handleSubmitData} className="space-y-4">
          {registerFormControl.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-gray-900 font-medium">
                {field.label}
              </label>
              <input
                type={field.type === 'password' ? (isShowPassword ? 'text' : 'password') : field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={formData[field.name as keyof FormData] || ""}
                onChange={handleFormDataChange}
                className="w-full border rounded-md p-2 mt-1 text-gray-900 outline-none focus:border-primary-600"
              />
              {field.type === 'password' && (
                <button type="button" onClick={toggleShowPassword} className="absolute mt-4 -ml-6">
                  {isShowPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-primary text-white font-medium rounded-md py-2 hover:bg-primary/90 transition"
          >
            Create an account
          </button>
          <p className="text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <Link to='/login'>
              <button className="text-primary hover:underline">
                Login here
              </button>
            </Link>
          </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default RegisterationForm;