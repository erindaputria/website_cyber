function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h4 className="text-sm text-gray-500">{title}</h4>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export default StatCard;
