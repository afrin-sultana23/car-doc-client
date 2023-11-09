import { Outlet } from "react-router-dom";
import NavBar from "../pages/home/shared/NavBar/NavBar";
import Footer from "../pages/home/shared/Footer/Footer";

 

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;