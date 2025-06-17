import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cambodia from "./pages/AboutCambodia";
import Hotel from "./pages/Hotel";
import Travel from "./pages/Travel";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import DestinationsDetail from "./pages/DestinationsDetail";
import HotelDetail from "./pages/HotelDetail";
import LoginForm from "./pages/LoginForm"; // Assuming you have this
import SignupForm from "./pages/SingupForm"; // Import your new SignupForm component

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cambodia",
        element: <Cambodia />,
      },
      {
        path: "hotel",
        element: <Hotel />,
      },
      {
        path: "travel",
        element: <Travel />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "explore/detail",
        element: <DestinationsDetail />,
      },
      {
        path: "hotel/detail",
        element: <HotelDetail />,
      },
    ],
  },
  {
    path: "login", // Route for your Login Form
    element: <LoginForm />,
  },
  {
    path: "signup", // NEW: Route for your Signup Form (Get Started Now page)
    element: <SignupForm />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
