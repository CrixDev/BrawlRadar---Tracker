import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
import { Activity, Award, Clock } from 'lucide-react';
import StatCard from '../components/StatCard';
import ActivityItem from '../components/ActivityItem';

function HomePage() {
    const { userID, userStats } = useContext(UserContext);
    const navigate = useNavigate();

    if (!userID) {
        navigate('/login');
        return null;
    }

    console.log('userStats:', userStats);
    return (
        <div className="p-8 bg-[#000033] text-[#EDF3F9] min-h-screen">
            <div className='flex space-x-10 w-full justify-between items-center mb-8'>
                <h2 className="text-4xl font-bold mb-8 text-[#70C9D3]">
                    Welcome, {userStats ? userStats.statsData.name : 'Guest'}
                </h2>
                <Link to="/login">
                    <button className='py-2 h-12 rounded font-semibold text-lg p-2 bg-[#70C9D3] text-[#000033] hover:bg-[#5AAAB2] transition-all'>
                        Iniciar Sesión
                    </button>
                </Link>
            </div>

            {userStats ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <StatCard icon={Clock} title="Games Played" value={`${userStats.statsData.games} games`} />
                        <StatCard icon={Award} title="WINS" value={`${userStats.statsData.wins} wins`} />
                        <StatCard icon={Activity} title="Current Level" value={userStats.statsData.level} />
                    </div>

                    <div className="bg-[#3C1F96] rounded-lg p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
                        <ul className="space-y-3">
                            {userStats.statsData.legends && userStats.statsData.legends.length > 0 ? (
                                userStats.statsData.legends.map((legend, index) => (
                                    <ActivityItem key={index} text={`Legend: ${legend.legend_name_key}, Games: ${legend.games}, Wins: ${legend.wins}`} />
                                ))
                            ) : (
                                <li>No recent activity</li>
                            )}
                        </ul>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default HomePage;