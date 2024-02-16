import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


const Register = () => {
    return (
        <div className="max-w-6xl mx-auto">
      <Header></Header>

      <div className="mx-auto hero-content">
        <div className="rounded-none border w-5/12">
        <form className="p-6">
            <h2 className="font-bold text-3xl">Create an account</h2>
            <div className="my-6">
              <input
                type="text"
                name="Fname"
                placeholder="First Name"
                className="border-b w-full p-2"
                required
              />
            </div>
            <div className="my-6">
              <input
                type="text"
                name="Lname"
                placeholder="Last Name"
                className="border-b w-full p-2"
                required
              />
            </div>
            <div className="my-6">
              <input
                type="email"
                name="email"
                placeholder="Username or Email"
                className="border-b w-full p-2"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border-b w-full p-2"
                required
              />
              <label className="label mt-3"></label>
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Confrim Password"
                className="border-b w-full p-2"
                required
              />
              <label className="label mt-3"></label>
            </div>
            <div className="form-control">
              <button className="btn bg-yellow-500 rounded-none">Login</button>
            </div>
            <p className="text-center mt-4">
              Already have an account?   
              <Link to="/login" className="text-yellow-500 border-b"> Login
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

export default Register;