function ActivityItem({ text }) {
    return (
      <li className="flex items-center space-x-3">
        <span className="w-2 h-2 bg-[#70C9D3] rounded-full"></span>
        <span>{text}</span>
      </li>
    );
    }

export default ActivityItem;