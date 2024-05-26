import { RouterProvider } from "react-router-dom";
// import Navbar from "./components/shared/Navbar";
import {router} from "./routes/routes";

 function App(){
  return(
    <>
    <RouterProvider router={router}/>
    </>
    
  );
}
export default App;


