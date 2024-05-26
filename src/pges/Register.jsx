import {useAuthState,useCreateUserWithEmailAndPassword} from "react-router-dom";
import GoogleLogin from "../components/Auth/GoogleLogin";
import {Link,useNavigate} from "react-router-dom";
import { useEffect } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";

import {auth} from "../firebase/firebase.config";

export default function Register() {
const [user,loading]=useAuthState(auth);
const navigate=useNavigate();

const [createUserWithEmailAndPassword]=useCreateUserWithEmailAndPassword(auth);

const handleSubmit=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    createUserWithEmailAndPassword(email,password);
}

let from=location.state?.form?.pathname||"/";

useEffect(() => {
if(user){
  navigate(from,{replace:true});
}
}, [user,loading,navigate,from]);

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
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
          <p className="text-center">
            Already have an account?
            <Link to={"/login"} className="text-orange-500">Login</Link>
          </p>
        </div>
      </form>
      <div className="w-full">
        <div className="flex flex-col gap-2 mx-7 mb-7">
          <GoogleLogin/>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
