import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-25">
        <Outlet />
      </div>
    </div>
  );
}
