import React, { useState, useEffect } from 'react';
import { Users, Shield, Code, Award, Mail, Linkedin, Github, Menu, X } from 'lucide-react';
import erindalImage from '../assets/erinda.png';
import masyitaalImage from '../assets/masyitaa.jpg';
import Headeer from './Headeer';
import Footer from './Footer';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Erinda Putri Awita",
      role: "Front-End & Back-End Developer",
      bio: "Berpengalaman dalam pengembangan front-end dan back-end aplikasi web. Tertarik pada keamanan siber dan terus belajar membangun aplikasi yang aman dan mudah digunakan.",
      expertise: ["Web Development (React, Vite)", "Backend Development (PHP, Laravel)", "Basic Security Implementation"],
      image: erindalImage,
      gradient: "from-pink-500 to-orange-500"
    },
    {
      id: 2,
      name: "Masyita Ika Sahara",
      role: "UI/UX & Front-End Developer",
      bio: "Berpengalaman dalam membangun antarmuka pengguna untuk platform edukasi digital. Tertarik pada pengembangan yang menarik dan mudah diakses, khususnya dalam bidang keamanan siber.",
      expertise: ["Educational Design", "Web Development (React, Vite)", "UI/UX Design", "Content Strategy"],
      image: masyitaalImage,
      gradient: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700">
      {/* Navbar */}
      <header className="bg-blue-900/80 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md">
      <Headeer />
      </header>

      {/* kasih jarak */}
      <div className="h-16"></div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mb-6 shadow-lg">
            <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white transform transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-300 via-teal-300 to-blue-400 bg-clip-text text-transparent">
            Tentang CyberEdu
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Platform edukasi cybersecurity terdepan di Indonesia yang berkomitmen untuk membangun generasi digital yang aman dan berpengetahuan luas tentang keamanan siber.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className={`grid md:grid-cols-2 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-yellow-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">Visi Kami</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Menjadi platform edukasi cybersecurity nomor satu di Asia Tenggara yang menghasilkan talenta-talenta terbaik dalam bidang keamanan siber dan menciptakan budaya cyber awareness yang kuat.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-teal-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">Misi Kami</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Menyediakan edukasi cybersecurity berkualitas tinggi yang mudah dipahami dan dapat diakses oleh semua kalangan, dari pemula hingga profesional, untuk menciptakan ekosistem digital yang lebih aman di Indonesia.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Tim Pengembang</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Bertemu dengan para visioner di balik CyberEdu yang berdedikasi untuk mengubah lanskap pendidikan cybersecurity di Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`group transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden shadow-lg">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className={`w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br ${member.gradient} p-1 shadow-md`}>
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
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className={`text-transparent bg-gradient-to-r ${member.gradient} bg-clip-text font-semibold text-sm sm:text-base`}>
                        {member.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-blue-100 text-center mb-6 leading-relaxed text-sm sm:text-base">
                      {member.bio}
                    </p>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 text-center">Keahlian:</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-2 py-1 bg-white/20 text-white text-xs sm:text-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200"
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