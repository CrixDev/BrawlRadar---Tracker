import React, { useContext, useState } from 'react';
import { UserContext } from '../components/UserContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { setUserID, setUserStats } = useContext(UserContext);
  const [userID, setUserIDInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userID })
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.user);
        setUserID(userID); // Guardar userID en contexto
        setUserStats(data.user); // Guardar userStats en contexto
        navigate("/"); // Redirigir al home
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Error en la conexión.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#000033] text-[#EDF3F9]">
      <div className="bg-[#3C1F96] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="mb-4">
          <label htmlFor="userID" className="block text-lg mb-2">
            User ID
          </label>
          <input
            type="text"
            id="userID"
            name="userID"
            value={userID}
            onChange={(e) => setUserIDInput(e.target.value)}
            className="w-full p-2 border rounded bg-[#EDF3F9] text-[#000033]"
            required
          />
        </div>
        <button
          onClick={handleLogin}
          className="py-2 px-4 bg-[#70C9D3] text-[#000033] font-semibold rounded hover:bg-[#5AAAB2] transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
