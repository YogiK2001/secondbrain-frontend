import { Outlet } from "react-router-dom";
import { Nav } from '../components/ui/index.js'

const Userlayout = () => {
  return (
    <>
      <Nav />
      <main className="mt-16">
        <Outlet />
      </main> 
  
    </>
  );
};

export default Userlayout;
