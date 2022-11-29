import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';
import EmpDetails from './EmpDetails';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exac path="/" element={<EmpListing/>}/>
      <Route exac path="/employe/create" element={<EmpCreate/>}/>
      <Route exac path="/employee/edit/:empid" element={<EmpEdit/>}/>
      <Route exac path="/employee/detail/:empid" element={<EmpDetails/>}/>

    </Routes>
  </BrowserRouter>
  );
  
}

export default App;
