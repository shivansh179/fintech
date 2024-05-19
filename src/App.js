import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./Component/First";
import Verify from "./Component/Verify";
import Login from './Component/Login'
import Signup from './Component/Singup'
import LoginWithNumber from './Component/LoginWithNumber'
import Final from "./Component/Final";
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        
          <Route path="/first" element={
          <PrivateRoute><First /></PrivateRoute>}/>
          <Route path="/verify" element={
          <PrivateRoute><Verify /></PrivateRoute>} />
          <Route path="/signup" element={
          <Signup />} />
          <Route path="/phone_login" element={
          <LoginWithNumber />} />
          <Route path="/final" element={
          <PrivateRoute><Final /></PrivateRoute>} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
