import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cambodia from "./pages/AboutCambodia";
import Hotel from "./pages/Hotel";
import Travel from "./pages/Travel";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
