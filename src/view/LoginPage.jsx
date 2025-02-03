import React, { useContext } from 'react';
import { UserContext } from '../components/UserContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { userID, setUserID } = useContext(UserContext);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('UserID:', userID);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#000033] text-[#EDF3F9]">
      <div className="bg-[#3C1F96] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userID" className="block text-lg mb-2">
              User ID
            </label>
            <input
              type="text"
              id="userID"
              name="userID"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              className="w-full p-2 border rounded bg-[#EDF3F9] text-[#000033]"
              required
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-[#70C9D3] text-[#000033] font-semibold rounded hover:bg-[#5AAAB2] transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
