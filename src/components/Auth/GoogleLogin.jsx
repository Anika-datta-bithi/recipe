import { useSignInWithGoogle} from "react-firebase-hooks/auth"
import {auth} from "../../firebase/firebase.config"


export default function GoogleLogin() {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    
    

    return (
    <div>
        <button onClick={()=>signInWithGoogle()} 
        className="bg-yellow-400 px-5 py-3 text-white rounded-lg w-full">GoogleLogin</button></div>
  );
}
