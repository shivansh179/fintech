import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../Images/get-money.png';

const First = () => {
  const navigate = useNavigate();

  function direct() {
    toast.loading("You need to verify yourself for buying");
    setTimeout(function() {
      navigate("/verify");
    }, 4000);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="md:text-4xl lg:text-4xl text-3xl text-center font-bold mb-8">Making Transaction Easy</h1>
      <img src={logo} alt="Logo" className="w-48 h-48 object-contain mb-8" />
      <button 
        onClick={direct} 
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
      >
        Make Transaction
      </button>
      <ToastContainer />
    </div>
  );
}

export default First;
