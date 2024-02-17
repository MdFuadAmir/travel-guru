import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviser";

const Register = () => {
    const {creatUser} = useContext(AuthContext);
    
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const fname = form.get('fname');
        const lname = form.get('lname');
        const email = form.get('email');
        const password = form.get('password');
        console.log(fname,lname,email,password);
        // creat user
        creatUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
       
    }

    return (
        <div className="max-w-6xl mx-auto">
      <Header></Header>
      <div className="mx-auto hero-content">
        <div className="rounded-none border w-5/12">
        <form onSubmit={handleRegister} className="p-6">
            <h2 className="font-bold text-3xl">Create an account</h2>
            <div className="my-6">
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                className="border-b w-full p-2"
                required
              />
            </div>
            <div className="my-6">
              <input
                type="text"
                name="lname"
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
                placeholder="password"
                className="border-b w-full p-2"
                required
              />
              <label className="label mt-3"></label>
            </div>
            
            <div className="form-control">
              <button className="btn bg-yellow-500 rounded-none">Creat an Account</button>
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
        <button className="btn border bg-white rounded-full "><FcGoogle className="text-2xl"></FcGoogle> Continue With Google</button>
      </div>
    </div>
    );
};

export default Register;