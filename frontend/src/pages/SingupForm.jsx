// src/pages/SignupForm.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignupForm = () => {
  const navigate = useNavigate(); // Initialize navigate for this component

  const handleSignInClick = () => {
    navigate("/login"); // Navigate back to the login page
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // You can add more complex validation here before proceeding
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const termsAccepted = event.target.terms.checked;

    if (!name || !email || !password || !termsAccepted) {
      // This part might be redundant if 'required' is working,
      // but it's good for custom messages or more complex logic.
      alert("Please fill in all fields and agree to the terms.");
      return;
    }

    // Here you would typically handle user registration logic
    console.log("Signup form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Terms Accepted:", termsAccepted);

    // After successful signup, you might navigate to a confirmation page or login page
    // navigate("/login");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side: Signup Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="w-[400px] text-left">
          <h2 className="text-3xl font-bold mb-2">Get Started Now</h2>
          <p className="text-gray-600 mb-8">
            Enter your Credentials to access your account
          </p>
          <form onSubmit={handleSignupSubmit}>
            {" "}
            {/* Wrap inputs in a form and add onSubmit */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58A6A0]"
                placeholder="Enter your name"
                required // Added required attribute
              />
            </div>
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
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Password
              </label>
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
                id="terms"
                className="mr-2 accent-[#58A6A0]"
                required // Added required attribute for terms
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the terms & policy
              </label>
            </div>
            {/* Signup Button */}
            <button
              type="submit" // Ensure this is type="submit" for form validation
              className="w-full bg-[#58A6A0] text-white py-3 rounded-lg font-medium text-lg hover:bg-[#4a8f8a] transition duration-300"
            >
              Signup
            </button>
          </form>{" "}
          {/* Close form tag */}
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
            Have an account?{" "}
            <span
              onClick={handleSignInClick} // Attach click handler here
              className="text-[#58A6A0] font-bold cursor-pointer hover:underline"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>

      {/* Right side: Green background */}
      <div className="w-1/2 bg-[#58A6A0] flex justify-center items-center rounded-l-[45px] rounded-r-none"></div>
    </div>
  );
};

export default SignupForm;
