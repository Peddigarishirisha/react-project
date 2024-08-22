import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";

import Home from "./pages/home";
import { AuthContextProvider } from "./context/Authcontext";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Account from "./pages/account";

import NavPage from "./pages/Navpage";

import Protectedroute from './component/protectedroute';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <ToastContainer></ToastContainer>
    
    <AuthContextProvider>
    <Navbar></Navbar>
    <Routes>

<Route path="/" element={<Home></Home>}/>
<Route path='/login' element={<Login></Login>} />
<Route path='/signup' element={<Signup></Signup>} />
<Route path='/account' element={<Protectedroute><Account /></Protectedroute>} />
<Route path='/movie/:id' element={<NavPage />} />
</Routes>

    </AuthContextProvider>

    
    
    </>
  );
}

export default App;
