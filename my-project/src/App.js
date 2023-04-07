import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route, Routes} from 'react-router-dom'
import { AuthContextProvider } from "./context/AuthContext";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Protectedroute from "./components/Protectedroute";
function App() {
  return (
    <>
      <AuthContextProvider>

        <Navbar/>
        <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/signup" element= {<Signup/>}/>
            <Route path="/account" element={<Protectedroute><Account/></Protectedroute>}/>

        </Routes>


      </AuthContextProvider>
    </>
  );
}

export default App;
