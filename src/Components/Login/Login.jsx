import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";



const Login = () => {
   
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
        // sign in user
       
    }
  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <div className="mx-auto hero-content">
        <div className="rounded-none border w-5/12">
        <form onSubmit={handleLogin} className="p-6">
            <h2 className="font-bold text-4xl">Login</h2>
            <div className="my-6">
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                className="border-b w-full p-2"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                className="border-b w-full p-2"
                required
              />
              <label className="label mt-3"></label>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <input type="checkbox" />
                  <p className="ml-4">Remember Me</p>
                </div>
                <a
                  href="#"
                  className="label-text-alt link link-hover border-b text-yellow-400 text-base"
                >
                  Forget Password
                </a>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-yellow-500 rounded-none">Login</button>
            </div>
            <p className="text-center mt-4">
              Dont have an account? 
              <Link to="/register" className="text-yellow-500 border-b"> Creat an account
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="text-center w-4/12 mx-auto flex flex-col">
        <hr className="my-4"/>
        <button className="btn border bg-white rounded-full mb-3"><FaFacebook className="text-2xl text-blue-400"></FaFacebook> Continue With Facebook</button>
        <button className="btn border bg-white rounded-full "> <FcGoogle className="text-2xl"></FcGoogle> Continue With Google</button>
      </div>
    </div>
  );
};

export default Login;
