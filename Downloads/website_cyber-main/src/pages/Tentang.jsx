import React, { useState, useEffect } from 'react';
import { Shield, Code, Award } from 'lucide-react';
import erindalImage from '../assets/erinda.png';
import masyitaalImage from '../assets/masyitaa.jpg';
import alvianaImage from '../assets/alviana.png';
import Headeer from './Headeer';
import Footer from './Footer';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Erinda Putri Awita",
      role: "Front-End & Product Management",
      bio: "Spesialis Front-End Developer sekaligus Product Enthusiast yang menghubungkan kebutuhan pengguna dengan solusi digital yang efektif.",
      expertise: ["React / Vue / Tailwind", "Product Strategy", "Design System", "Feature Prioritization"],
      image: erindalImage,
    },
    {
      id: 2,
      name: "Masyita Ika Sahara",
      role: "UI/UX & Front-End Developer",
      bio: "Spesialis UI/UX Designer dan Front-End Developer yang fokus pada pengalaman pengguna dan tampilan antarmuka yang fungsional.",
      expertise: ["UI/UX Design", "Responsive Web Design", "React / Vue / Tailwind", "Design System"],
      image: masyitaalImage,
    },
    {
      id: 3,
      name: "Alviana Imron Nur",
      role: "Back-End Developer",
      bio: "Spesialis Back-End Developer yang ahli dalam riset keamanan siber dan pengembangan konten edukatif, dengan fokus penyajian materi teknis yang akurat.",
      expertise: ["API Development", "Database Management", "Error Handling & Logging", "Testing"],
      image: alvianaImage,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-2xl sticky top-0 z-50">
        <Headeer />
      </header>

      {/* Spacer */}
      <div className="h-16"></div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6 shadow-lg">
            <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white transform transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 text-wrap balance">
          Tentang CyberEdu
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Platform edukasi cybersecurity terdepan di Indonesia yang berkomitmen untuk membangun generasi digital yang aman dan berpengetahuan luas tentang keamanan siber.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className={`grid md:grid-cols-2 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 group shadow-lg hover:scale-[1.02]">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-blue-800">Visi Kami</h3>
            </div>
            <p className="text-blue-700 leading-relaxed">
              Menjadi platform edukasi keamanan siber terpercaya yang membentuk masyarakat digital cerdas, sadar risiko, dan tangguh menghadapi ancaman siber.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border-2 border-indigo-200 hover:border-indigo-300 transition-all duration-300 group shadow-lg hover:scale-[1.02]">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-2xl font-bold text-indigo-800">Misi Kami</h3>
            </div>
            <p className="text-indigo-700 leading-relaxed">
              Menyediakan edukasi cybersecurity berkualitas tinggi yang mudah dipahami dan dapat diakses oleh semua kalangan, dari pemula hingga profesional, untuk menciptakan ekosistem digital yang lebih aman di Indonesia.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Tim Pengembang</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bertemu dengan para visioner di balik CyberEdu yang berdedikasi untuk mengubah lanskap pendidikan cybersecurity di Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`group transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-blue-200 transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.02]">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-blue-800 p-1 shadow-md">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover bg-gray-200 border-2 border-white/20"
                        />
                      </div>
                      <div className="absolute inset-0 w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-transparent to-white/20 group-hover:to-white/30 transition-all duration-300"></div>
                    </div>

                    {/* Name & Role */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                      <p className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text font-semibold text-sm sm:text-base">
                        {member.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-600 text-center mb-6 leading-relaxed text-sm sm:text-base">
                      {member.bio}
                    </p>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h4 className="text-gray-700 font-semibold mb-3 text-center">Keahlian:</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-2 py-1 text-xs sm:text-sm rounded-full border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-20">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUs;