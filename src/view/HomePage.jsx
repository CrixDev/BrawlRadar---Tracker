import React from 'react';
import { Link } from 'react-router-dom';

import { Activity, Award, Clock } from 'lucide-react';
import StatCard from '../components/StatCard';
import ActivityItem from '../components/ActivityItem';


function HomePage() {
 
    return(
    <div className=" p-8 bg-[#000033] text-[#EDF3F9] min-h-screen">
    <div className='flex space-x-10'>
    <h2 className="text-4xl font-bold mb-8 text-[#70C9D3]">Welcome, Crix!</h2>
  <Link to="/Login">
  <button 
    
    className='py-2 h-12 rounded font-semibold text-lg p-2 bg-[#70C9D3] text-[#000033] hover:bg-[#5AAAB2] transition-all'>
      Iniciar Sesion
       
       </button>
       </Link>
   
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard icon={Clock} title="Play Time" value="127 hours" />
      <StatCard icon={Award} title="Achievements" value="42/100" />
      <StatCard icon={Activity} title="Current Level" value="75" />
    </div>

    <div className="bg-[#3C1F96] rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
      <ul className="space-y-3">
        <ActivityItem text="Completed mission 'The Fall of Titans'" />
        <ActivityItem text="Unlocked achievement 'Stealth Master'" />
        <ActivityItem text="Reached level 75" />
      </ul>
    </div>

  </div>
    );
}


export default HomePage;
