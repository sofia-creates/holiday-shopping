import { Outlet } from "react-router-dom";
import NavBar from "../Components/UI/NavBar";

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