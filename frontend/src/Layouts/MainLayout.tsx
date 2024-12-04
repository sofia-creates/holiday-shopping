import { Outlet } from "react-router-dom";

import NavBar from "../Components/UI/NavBar";
import Header from "../Components/UI/Header";

const MainLayout = () => {
  return (
    <>
        <NavBar />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default MainLayout;