import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Pricing from "./components/Pricing.jsx";
import Support from "./components/pages/Support.jsx";
import Products from "./components/pages/Products.jsx";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import Login from "./components/pages/Login.jsx";
import Special from "./components/pages/Special.jsx";



export default function App(){

  return(

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/special" element={<Special />} />

        <Route path="*"  element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}
