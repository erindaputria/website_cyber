import React, { useState } from 'react';
import { Users, BookOpen, Award, BarChart3, Search, Filter, Download, Mail, Eye, CheckCircle, Clock, Star } from 'lucide-react';

const CyberEduAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');

  // Mock data untuk demo
  const users = [
    { id: 1, name: 'Ahmad Sutrisno', email: 'ahmad.sutrisno@email.com', registeredDate: '2024-01-15', currentModule: 'Dasar - Modul 3', progress: 45, level: 'dasar', completed: false },
    { id: 2, name: 'Siti Rahayu', email: 'siti.rahayu@email.com', registeredDate: '2024-01-20', currentModule: 'Menengah - Modul 2', progress: 75, level: 'menengah', completed: false },
    { id: 3, name: 'Budi Prakoso', email: 'budi.prakoso@email.com', registeredDate: '2024-01-10', currentModule: 'Lanjut - Modul 4', progress: 100, level: 'lanjut', completed: true },
    { id: 4, name: 'Diana Kusuma', email: 'diana.kusuma@email.com', registeredDate: '2024-02-01', currentModule: 'Dasar - Modul 1', progress: 20, level: 'dasar', completed: false },
    { id: 5, name: 'Eko Saputra', email: 'eko.saputra@email.com', registeredDate: '2024-01-25', currentModule: 'Menengah - Modul 5', progress: 100, level: 'menengah', completed: true },
  ];

  const certificateEligible = users.filter(user => user.completed);

  const moduleScores = [
    { userId: 1, userName: 'Ahmad Sutrisno', level: 'dasar', module: 'Modul 1', score: 85, date: '2024-02-01' },
    { userId: 1, userName: 'Ahmad Sutrisno', level: 'dasar', module: 'Modul 2', score: 78, date: '2024-02-05' },
    { userId: 2, userName: 'Siti Rahayu', level: 'menengah', module: 'Modul 1', score: 92, date: '2024-02-02' },
    { userId: 2, userName: 'Siti Rahayu', level: 'menengah', module: 'Modul 2', score: 88, date: '2024-02-08' },
    { userId: 3, userName: 'Budi Prakoso', level: 'lanjut', module: 'Modul 1', score: 95, date: '2024-01-20' },
    { userId: 3, userName: 'Budi Prakoso', level: 'lanjut', module: 'Modul 2', score: 89, date: '2024-01-25' },
    { userId: 3, userName: 'Budi Prakoso', level: 'lanjut', module: 'Modul 3', score: 93, date: '2024-01-30' },
    { userId: 3, userName: 'Budi Prakoso', level: 'lanjut', module: 'Modul 4', score: 91, date: '2024-02-05' },
    { userId: 5, userName: 'Eko Saputra', level: 'menengah', module: 'Modul 1', score: 87, date: '2024-02-03' },
    { userId: 5, userName: 'Eko Saputra', level: 'menengah', module: 'Modul 2', score: 90, date: '2024-02-10' },
  ];

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.progress > 0).length,
    completedCourses: certificateEligible.length,
    avgProgress: Math.round(users.reduce((acc, user) => acc + user.progress, 0) / users.length)
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'dasar': return 'bg-green-100 text-green-800';
      case 'menengah': return 'bg-yellow-100 text-yellow-800';
      case 'lanjut': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600 font-semibold';
    if (score >= 80) return 'text-blue-600 font-semibold';
    if (score >= 70) return 'text-yellow-600 font-semibold';
    return 'text-red-600 font-semibold';
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'all' || user.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  const filteredScores = moduleScores.filter(score => {
    const matchesSearch = score.userName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'all' || score.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 mb-8">
          <nav className="flex space-x-2">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'users', label: 'Pengguna Terdaftar', icon: Users },
              { id: 'progress', label: 'Progress Belajar', icon: BookOpen },
              { id: 'certificates', label: 'Sertifikat', icon: Award },
              { id: 'scores', label: 'Riwayat Nilai', icon: Star }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Total Pengguna</p>
                    <p className="text-3xl font-bold">{stats.totalUsers}</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">Pengguna Aktif</p>
                    <p className="text-3xl font-bold">{stats.activeUsers}</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-green-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">Kursus Selesai</p>
                    <p className="text-3xl font-bold">{stats.completedCourses}</p>
                  </div>
                  <Award className="h-8 w-8 text-purple-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100">Rata-rata Progress</p>
                    <p className="text-3xl font-bold">{stats.avgProgress}%</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-orange-200" />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Aktivitas Terbaru</h3>
              <div className="space-y-4">
                {users.slice(0, 3).map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-left">{user.name}</p>
                        <p className="text-gray-400 text-sm">Sedang belajar {user.currentModule}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">{user.progress}%</p>
                      <p className="text-gray-400 text-sm">Progress</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
                <h3 className="text-xl font-semibold text-white">Pengguna Terdaftar</h3>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Cari pengguna..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                    <select
                        value={filterLevel}
                        onChange={(e) => setFilterLevel(e.target.value)}
                        className="px-4 py-2 bg-white text-black border text-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                        <option value="all">Semua Level</option>
                        <option value="dasar">Dasar</option>
                        <option value="menengah">Menengah</option>
                        <option value="lanjut">Lanjut</option>
                    </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Nama</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Email</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Tanggal Daftar</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Level</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-semibold">{user.name.charAt(0)}</span>
                            </div>
                            <span className="text-white font-medium">{user.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-left">
                            <span className="text-gray-300">{user.email}</span>
                            </td>
                        <td className="py-4 px-4 text-left">
                          <span className="text-gray-300">{user.registeredDate}</span>
                        </td>
                        <td className="py-4 px-4 text-left">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(user.level)}`}>
                                {user.level.charAt(0).toUpperCase() + user.level.slice(1)}
                            </span>
                        </td>

                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            {user.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <Clock className="h-4 w-4 text-yellow-500" />
                            )}
                            <span className={`text-sm ${user.completed ? 'text-green-400' : 'text-yellow-400'}`}>
                              {user.completed ? 'Selesai' : 'Aktif'}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Progress Belajar Pengguna</h3>
              <div className="space-y-4">
                {filteredUsers.map((user) => (
                  <div key={user.id} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">{user.name.charAt(0)}</span>
                        </div>
                        <div className="text-left">
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-gray-400 text-sm">{user.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(user.level)}`}>
                          {user.level.charAt(0).toUpperCase() + user.level.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 text-sm">{user.currentModule}</span>
                        <span className="text-white font-medium">{user.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${user.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === 'certificates' && (
        <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-white">Pengguna Berhak Mendapat Sertifikat</h3>
            </div>

            {certificateEligible.length === 0 ? (
                <div className="text-center py-12">
                <Award className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Belum ada pengguna yang menyelesaikan kuis</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificateEligible.map((user) => (
                    <div key={user.id} className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-left">
                        <p className="text-white font-semibold">{user.name}</p>
                        <p className="text-gray-300 text-sm">{user.email}</p>
                        </div>
                    </div>

                    {/* Level section dihapus */}

                    <div className="flex justify-between items-center">
                        <div>
                        <p className="text-green-400 font-medium">Kuis Selesai</p>
                        <p className="text-gray-400 text-sm">Progress: {user.progress}%</p>
                        </div>
                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-2 rounded-lg text-sm flex items-center space-x-2 transition-all duration-200">
                        <Mail className="h-3 w-3" />
                        <span>Kirim</span>
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            )}
            </div>
        </div>
        )}


        {/* Scores Tab */}
        {activeTab === 'scores' && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
                <h3 className="text-xl font-semibold text-white">Riwayat Nilai Modul</h3>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Cari pengguna..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                <select
                    value={filterLevel}
                    onChange={(e) => setFilterLevel(e.target.value)}
                    className="px-4 py-2 bg-white text-black border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                    <option value="all">Semua Level</option>
                    <option value="dasar">Dasar</option>
                    <option value="menengah">Menengah</option>
                    <option value="lanjut">Lanjut</option>
                </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Nama</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Level</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Modul</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Nilai</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredScores.map((score, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-semibold">{score.userName.charAt(0)}</span>
                            </div>
                            <span className="text-white font-medium">{score.userName}</span>
                          </div>
                        </td>
                        <td className="py-4 px-2 text-left">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(score.level)}`}>
                                {score.level.charAt(0).toUpperCase() + score.level.slice(1)}
                            </span>
                        </td>
                        <td className="py-4 px-4 text-left">
                          <span className="text-gray-300">{score.module}</span>
                        </td>
                        <td className="py-4 px-4 text-left">
                            <span className="text-gray-300">{score.score}</span>
                        </td>
                        <td className="py-4 px-4 text-left">
                          <span className="text-gray-300">{score.date}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CyberEduAdminDashboard;