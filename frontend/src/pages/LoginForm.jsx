// src/pages/LoginForm.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup"); // Navigate to the signup page
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // You can add more complex validation here before proceeding
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password) {
      // This part might be redundant if 'required' is working,
      // but it's good for custom messages or more complex logic.
      alert("Please fill in both email and password.");
      return;
    }

    // Here you would typically handle authentication logic
    console.log("Login form submitted!");
    console.log("Email:", email);
    console.log("Password:", password);
    // After successful login, you might navigate to a dashboard or home page
    // navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side: Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="w-[400px] text-left">
          <h2 className="text-3xl font-bold mb-2 text-[#000] ">
            Welcome back!
          </h2>
          <p className="text-[#000] mb-8 font-[lato] font-[600]">
            Enter your Credentials to access your account
          </p>

          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58A6A0]"
                placeholder="Enter your email"
                required // Added required attribute
              />
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-medium"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline" // Styling for forgot password
                >
                  forgot password
                </a>
              </div>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58A6A0]"
                placeholder="Enter your password"
                required // Added required attribute
              />
            </div>

            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2 accent-[#58A6A0]"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#58A6A0] text-white py-3 rounded-lg font-medium text-lg hover:bg-[#4a8f8a] transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {/* Sign in with Google */}
            <button className="flex items-center border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 transition duration-200">
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="Google"
                className="mr-2"
              />
              Sign in with Google
            </button>
            {/* Sign in with Apple */}
            <button className="flex items-center border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 transition duration-200">
              <img
                src="https://img.icons8.com/ios-filled/16/000000/mac-os.png"
                alt="Apple"
                className="mr-2"
              />
              Sign in with Apple
            </button>
          </div>

          <p className="text-center text-gray-700">
            Don't have an account?{" "}
            <span
              onClick={handleSignUpClick} // Attach click handler here
              className="text-[#58A6A0] font-bold cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>

      {/* Right side: Green background */}
      <div className="w-1/2 bg-[#58A6A0] flex justify-center items-center rounded-l-[45px] rounded-r-none">
        {/* You can add some content or images here if desired */}
      </div>
    </div>
  );
};

export default LoginForm;
