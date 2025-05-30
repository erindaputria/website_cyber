import { useEffect, useState } from 'react';
import axios from 'axios';
import { MessageCircle, Users, Clock, Award } from 'lucide-react'; // pastikan icon sudah di-install
import StatCard from './Statcard'; // sesuaikan path kalau beda folder
import ForumStatistics from './ForumStatistics'; 

function ForumStatistics() {
  const [stats, setStats] = useState({
    total_topics: 0,
    total_users: 0,
    daily_topics: 0,
    active_contributors: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/forum-statistics');
        console.log('Data dari API:', response.data); // buat debugging
        setStats(response.data);
      } catch (err) {
        console.error('Gagal ambil data statistik:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div>Memuat statistik...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">📊 Statistik Forum</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={<MessageCircle />} title="Total Topik" value={stats.total_topics} />
        <StatCard icon={<Users />} title="Total Pengguna" value={stats.total_users} />
        <StatCard icon={<Clock />} title="Topik Hari Ini" value={stats.daily_topics} />
        <StatCard icon={<Award />} title="Kontributor Aktif" value={stats.active_contributors} />
      </div>
    </div>
  );
}

export default ForumStatistics;
