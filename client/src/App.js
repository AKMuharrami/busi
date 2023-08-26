import { Route, Routes } from "react-router-dom";
import Astaff from "./components/Astaff";
// import './App.css';
import Adminfun from './components/admin';
import ResponsiveAppBar from './components/Appbar';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="/admin" Component={Adminfun}/>
        <Route path="/admin/staff" Component={Astaff}/>
        {/* <Route path="/admin/products" Component={Aproducts}/> */}
        {/* <Route path="/admin/customers" Component={Acustomers}/> */}
      </Routes>
    </div>
  );
}

export default App;
