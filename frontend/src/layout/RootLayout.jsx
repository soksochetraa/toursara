import { Outlet } from "react-router-dom";
import NavBar from "../components/navigations/NavBar";
import Footer from "../components/navigations/Footer";
const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
