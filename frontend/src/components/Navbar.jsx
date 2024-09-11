import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
        <div className=" w-full h-16 flex justify-evenly items-center shadow-sm" >
          <img src="/logo.svg" className="w-36 justify-start cursor-pointer" alt="" />
          <div>
            <ul className="flex justify-center items-center space-x-12 cursor-pointer ">
              <Link to={"/"} className=" hover:border-b-2 border-black">Home</Link>
              <Link to={"/about"} className="hover:border-b-2 border-black">About</Link>
              <Link to={"/pricing"} className="hover:border-b-2 border-black">Pricing</Link>
              <Link to={"/support"} className="hover:border-b-2 border-black">Support</Link>
              <Link to={"/products"} className="hover:border-b-2 border-black">Products</Link>
              <Link to={"/signup"} className="hover:border-b-2 border-black">SignUp</Link>
              <Link to={"/signin"} className="hover:border-b-2 border-black">SignIn</Link>
            </ul>
          </div>
        </div>
    </> 
  )
}

export default Navbar