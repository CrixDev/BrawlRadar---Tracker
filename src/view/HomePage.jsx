import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
import { Activity, Award, Clock } from 'lucide-react';
import StatCard from '../components/StatCard';
import ActivityItem from '../components/ActivityItem';

function HomePage() {
  const { userID } = useContext(UserContext); 
  const apiKey = process.env.REACT_APP_BRAWLHALLA_API_KEY;
  const [playerStats, setPlayerStats] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  

    const fetchData = async () => { 
      try {
        const searchUrl = `https://api.brawlhalla.com/search?steamid=${userID}&api_key=RHXP3Q3WN2N37P7SRA8B`;
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();

        if (!searchData.brawlhalla_id) {
          console.error('brawlhalla_id not found');
          return;
        }

        const brawlhalla_id = searchData.brawlhalla_id;
        const statsUrl = `https://api.brawlhalla.com/player/${brawlhalla_id}/stats?api_key=RHXP3Q3WN2N37P7SRA8B`;
        const statsResponse = await fetch(statsUrl);
        const statsData = await statsResponse.json();
        setPlayerStats(statsData);
        console.log(statsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userID, apiKey, navigate]);

  return (
    <div className="p-8 bg-[#000033] text-[#EDF3F9] min-h-screen">
      <div className='flex space-x-10 w-full justify-between items-center mb-8'>
        <h2 className="text-4xl font-bold mb-8 text-[#70C9D3]"> Welcome, {playerStats ? playerStats.name : 'Guest'}!</h2>
        <Link to="/login">
          <button 
            className='py-2 h-12 rounded font-semibold text-lg p-2 bg-[#70C9D3] text-[#000033] hover:bg-[#5AAAB2] transition-all'>
            Iniciar Sesion
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard icon={Clock} title="Games Played" value={playerStats ? `${playerStats.games} games` : 'Loading...'} />
        <StatCard icon={Award} title="WINS" value={playerStats ? `${playerStats.wins} wins` : 'Loading...'} />
        <StatCard icon={Activity} title="Current Level" value={playerStats ? playerStats.level : 'Loading...'} />
   
       </div>

      <div className="bg-[#3C1F96] rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-3">
        {playerStats && playerStats.legends ? (
            playerStats.legends.map((legend, index) => (
              <ActivityItem key={index} text={`Legend: ${legend.legend_name_key}, Games: ${legend.games}, Wins: ${legend.wins}`} />
            ))
          ) : (
            <li>Loading...</li>
          )}
        
        </ul>
      </div>
    </div>
  );
}

export default HomePage;