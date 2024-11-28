import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
        {/* navbar här */}
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default MainLayout;