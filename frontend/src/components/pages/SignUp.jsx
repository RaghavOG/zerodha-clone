import {useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';

const SignUp = () => {
  const [input, setInput] = useState({ mobile: "", name: "", password: "" });
  const {user} = useSelector(store=>store.auth);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(input)
}

const signupHandler = async (e) => {
  e.preventDefault();
  if (!input.mobile || !input.name || !input.password) {
    alert("All fields are required");
    return;
}
  try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, input, {
          headers: {
              'Content-Type': 'application/json'
          },
          withCredentials: true
      });
      console.log(res);
      if (res.status === 201) {
        console.log("User signed up successfully");
        console.log("Response data:", res.data); // Show detailed response if needed
        navigate("/signin");
    }


  } catch (error) {
    console.log("Axios error:", error);
    if (error.response) {
        console.log("Server responded with:", error.response.data.message);
    } else if (error.request) {
        console.log("No response from the server:", error.request);
    } else {
        console.log("Error setting up request:", error.message);
    }
  } finally {
      setLoading(false);
  }
}
useEffect(()=>{
  if(user){
      navigate("/");
  }
},[user,navigate])

  return (
    <>
      <div className="flex flex-col justify-center items-center px-36 mx-auto ">
        <div className="flex my-16 mt-32 w-5/6  ">
          <div className="">
            <img src="signup-image.png" className="" alt="" />
          </div>
          <div className=" flex flex-col items-start justify-center px-16 ml-16  ">
            <h1 className="font-medium py-3 text-3xl ">Signup Now</h1>
            <p className="text-gray-500 text-sm">Or track your existing application.</p>
            <form onSubmit={signupHandler} >
            {/* ================================================================ */}
            <label
              htmlFor="mobile-number"
              className="block text-gray-700 text-sm font-bold mb-2 pt-3"
              >
              Mobile number
            </label>
            <input type="text" placeholder="+91"
              className="w-full px-3 py-2 border  border-gray-300 rounded-lg" name="mobile" value={input.mobile} id="mobile"
              onChange={changeEventHandler} />
              {/* ================================================================ */}
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2 pt-3"
              >
              Name
            </label>
            <input type="text" placeholder="name"
              className="w-full px-3 py-2 border  border-gray-300 rounded-lg" name="name" value={input.name} id="name"
              onChange={changeEventHandler} />
              {/* ================================================================ */}
            <label
              htmlFor="mobile-number"
              className="block text-gray-700 text-sm font-bold mb-2 pt-3"
              >
              Passowrd
            </label>
            <input type="password" placeholder=""
              className="w-full px-3 py-2 border  border-gray-300 rounded-lg" name="password" value={input.password} id="password"
              onChange={changeEventHandler} />
              {/* ================================================================ */}
            {/* <p className="text-[.9rem] text-gray-400">You will receive an OTP on your number</p> */}


            {
                    loading ? (
                        <button className="w-32 bg-blue-600 mt-3 text-white py-2 rounded-lg hover:bg-blue-700" >
                            
                            Please wait...
                        </button>
                    ) : (
                        <button className="w-32 bg-blue-600 mt-3 text-white py-2 rounded-lg hover:bg-blue-700" type='submit'>Signup</button>
                    )
                }














            </form>
            <h6 className="text-blue-600 text-[.8rem] my-3" >Want to open an NRI Account?</h6>
          </div>
        </div>
        <div className="">
          <p className="text-[.8rem] text-gray-400 justify-center text-center">
            I authorise Zerodha to contact me even if my number is registered on
            DND. I authorise Zerodha to fetch my KYC information from the C-KYC
            registry with my PAN. Please visit{" "}
            <span className="text-blue-700 font-semibold"> this article</span>{" "}
            to know more.
          </p>
          <p className="text-[.8rem] text-gray-400 mb-16 justify-center text-center mt-3">
            If you are looking to open a HUF, Corporate, Partnership, or NRI
            account, you have to use the{" "}
            <span className="text-blue-700 font-semibold">offline forms</span>.
            For help,{" "}
            <span className="text-blue-700 font-semibold">click here</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
