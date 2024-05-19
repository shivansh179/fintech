import React from 'react';
import '@passageidentity/passage-elements/passage-auth';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from '../firebase';


 const Verify = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <passage-auth app-id="MFmccYHIscSpH5vJRULaf00n"></passage-auth>
      </div>

      <button
        className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
        onClick={handleLogout}
      >LogOut</button>
    </div>
  );
}

export default Verify;
