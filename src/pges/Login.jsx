import {Link,useNavigate} from "react-router-dom";
import {auth} from "../firebase/firebase.config";
import GoogleLogin from "../components/Auth/GoogleLogin";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Login() {
const [user,loading]=useAuthState(auth);

const navigate=useNavigate();
let form=location.state?.form?.pathname||"/";


useEffect(()=>{
  if(user){
    navigate(form,{replace:true});
  }
},[user,loading,navigate,form]);


  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>

           <p className="text-center">
           Don&apos;t have any account ?{" "}
           <Link to={"/register"} className="text-orange-500">Register</Link>
           </p>
          </form>
          <div className="w-full">
            <div className="flex flex-col gap-2 mx-7 mb-7">
              <GoogleLogin/>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
}
