import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login';
import SignIn from './Pages/Signup/Signin'
import Home from './Pages/Home/Home'
import History from './Pages/History/History';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/create" element={<SignIn/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/history" element={<History/>}/>
    {/* <Route path="/" element={[<Menu/>,<Home/>]}/>
    <Route path="/AboutUs" element={[<Menu/>,<About/>]}/>
    <Route path="/ContactUs" element={[<Menu/>,<Contact/>]}/> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
