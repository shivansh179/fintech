import React from 'react';
import logo from '../Images/correct.png'
import app from '../firebase';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';;

const Final = () => {


    const auth = getAuth(app);
    const navigate = useNavigate();
    
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/");
      console.log("Signed out successfully");
    }).catch((error) => {
      console.error("An error happened during sign out:", error);
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-4">
      <h1 className="text-4xl font-bold mb-6">You are good to go</h1>
      <img src={logo} alt="Correct" className="w-32 h-32 object-contain mb-6" />
      <h2 className="text-2xl font-semibold mb-6">Now complete your transaction</h2>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out">
        Proceed ahead
      </button>

      <button
        className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
        onClick={handleLogout}
      >LogOut</button>
    </div>
  );
}

export default Final;
