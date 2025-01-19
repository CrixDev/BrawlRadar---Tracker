import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Home, Info, ChevronLeft, ChevronRight } from 'lucide-react';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
  <div 
      className={`h-screen bg-[#3C1F96] text-[#EDF3F9] p-4 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between mb-8">

  
        <div className={`  text-xl font-bold ${isCollapsed ? 'hidden' : 'block'}`}> <h1>BrawlTracker</h1> </div>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-full hover:bg-[#7F2CB2] transition-colors duration-300"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link 
              to="/" 
              className="flex items-center px-2 py-2 rounded hover:bg-[#7F2CB2] transition-colors duration-300"
            >
              <Home size={20} className="mr-2 text-[#70C9D3]" />
              <span className={isCollapsed ? 'hidden' : 'block'}>Home</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link 
              to="/about" 
              className="flex items-center px-2 py-2 rounded hover:bg-[#7F2CB2] transition-colors duration-300"
            >
              <Info size={20} className="mr-2 text-[#70C9D3]" />
              <span className={isCollapsed ? 'hidden' : 'block'}>About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
