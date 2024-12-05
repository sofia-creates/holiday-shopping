import { Outlet } from "react-router-dom";

import NavBar from "../Components/UI/NavBar";
import Footer from "../Components/UI/Footer";

const MainLayout = () => {
  return (
    <>
        <NavBar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default MainLayout;