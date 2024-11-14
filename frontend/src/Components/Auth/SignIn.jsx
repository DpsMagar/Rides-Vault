import logo from '../../Images/PrimaryLogo.png'
import gif from '../../Gif/flying-saucer-2949.gif'
import axios from 'axios'
import { Link } from 'react-router-dom';


import { useState } from 'react';

const SignIn = () => {

    const [ email, setEmail ] = useState('')
    const [ password , setPassword]= useState('')
    const [error , setError]= useState('')

    const handleSubmit= async (e)=>{
      e.preventDefault();
      try{
          const response= await axios.post('http://127.0.0.1:8000/api/login/',{
            email: email,
            password: password
          })
          const {refresh, access}= response.data;
          localStorage.setItem("acessToken",access)
          localStorage.setItem("refreshToken",refresh)
          console.log("Logged in successfully");
          

      }
      catch (err) {         
        if (err.response) {
            console.error('Error response:', err.response);
            if (err.response.data) {
                setError(err.response.data.detail || 'Invalid credentials');
            } else {
                setError('Invalid credentials');
            }
        } else {
            console.error('Error:', err.message);
            setError('Something went wrong. Please try again.');
        }
    }

    }   
    return (
      <div className="flex w-screen flex-wrap text-slate-800 bg-[#855E40]">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12">
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
            <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
              Welcome back <br />
              to <span className="text-blue-600">rideVault</span>
            </p>
            <p className="mt-6 text-center font-medium md:text-left">Sign in to your account below.</p>
  
          <form className="flex flex-col items-stretch pt-3 md:pt-8" onSubmit={handleSubmit}>
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="email"
                    id="login-email"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-slate-200 py-2 px-4 text-base text-gray-700  focus:outline-none"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="password"
                    id="login-password"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-slate-200 py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
              </div>
              <a href="#" className="mb-6 text-center text-sm font-medium text-gray-900 md:text-left">Forgot password?</a>
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
              >
                Sign in
              </button>
            </form>
            <div className="py-12 text-center">
              <p className="text-gray-900">
                Don't have an account?{" "}
                <a href="#" className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4">Sign up for free.</a>
              </p>
            </div>
          </div>
        </div>
        <div className=" hidden h-screen select-none  bg-gradient-to-br md:block md:w-1/2 p-2">
          <img src={gif} alt="" className='h-full w-full opacity-80' />
        </div>
      </div>
    );
  };
  
  export default SignIn;
  