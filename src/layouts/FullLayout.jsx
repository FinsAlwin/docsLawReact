import { Outlet } from "react-router-dom";
import Header from "./Header";

const FullLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default FullLayout;
