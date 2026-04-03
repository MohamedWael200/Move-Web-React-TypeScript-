import Header from "./Header.tsx";
import {Outlet} from "react-router";
import Footer from "./Footer.tsx";

function Layout () {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout