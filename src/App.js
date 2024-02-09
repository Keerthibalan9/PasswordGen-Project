import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    {/* <Route path="/" element={[<Menu/>,<Home/>]}/>
    <Route path="/AboutUs" element={[<Menu/>,<About/>]}/>
    <Route path="/ContactUs" element={[<Menu/>,<Contact/>]}/> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
