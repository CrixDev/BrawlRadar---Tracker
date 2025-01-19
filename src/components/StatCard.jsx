function StatCard({ icon: Icon, title, value }) {
    return (
      <div className="bg-gradient-to-br from-[#3C1F96] to-[#7F2CB2] rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Icon className="text-[#70C9D3]" size={24} />
        </div>
        <p className="text-3xl font-bold text-[#70C9D3]">{value}</p>
      </div>
    );
    }
    
export default StatCard;