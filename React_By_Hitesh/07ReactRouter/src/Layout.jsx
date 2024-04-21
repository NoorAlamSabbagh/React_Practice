import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

function Layout() {
  return (
    //header and footer same rahega outlet ki wajah se react router provide karta ha
    <>
    <Header />
    <Outlet />
     <Footer/>
    </>
  )
}

export default Layout
