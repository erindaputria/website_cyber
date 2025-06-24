import { Shield, Lock, ChevronLeft, ChevronRight, Cloud, BookOpen, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

// Import topics
import { CloudComputing } from './topicsLanjut/CloudComputing';
import { EthicalHacking } from './topicsLanjut/EthicalHacking';
import { SocialEngineering } from './topicsLanjut/SocialEngineering';
import { IOTSecurity } from './topicsLanjut/IOTSecurity';
import { EmailSecurity } from './topicsLanjut/EmailSecurity';
import { SupplyChainSecurity } from './topicsLanjut/SupplyChainSecurity';
import { KubernetesContainerSecurity } from './topicsLanjut/KubernetesContainerSecurity';
import { AnalisisLogForensikDigital } from './topicsMenengah/AnalisisLogForensikDigital';
import { AdvancedMalwareRansomware } from './topicsLanjut/AdvancedMalwareRansomware';

export default function Lanjut({ onBack }) {
  const [activeTopic, setActiveTopic] = useState(0);

  const topics = [
    CloudComputing,
    EthicalHacking,
    SocialEngineering,
    IOTSecurity,
    EmailSecurity,
    SupplyChainSecurity,
    KubernetesContainerSecurity,
    AnalisisLogForensikDigital,
    AdvancedMalwareRansomware
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-indigo-100">
      <div className="animate-fade-in mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-8 max-w-7xl">
        {/* Enhanced Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 mb-4 sm:mb-6 md:mb-8 text-blue-600 hover:text-blue-800 transition-all duration-300 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transform hover:scale-105 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-semibold">Kembali ke semua level</span>
        </button>

        {/* Enhanced Main Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Enhanced Level Header */}
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-700 to-purple-800 px-6 py-8 sm:px-8 sm:py-12 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 sm:p-5 rounded-2xl sm:rounded-3xl w-fit shadow-lg">
                  <Cloud className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Keamanan Cyber Tingkat Lanjut</h2>
                  <p className="text-indigo-100 mt-1 sm:mt-2 max-w-2xl text-base sm:text-lg font-medium">
                    Teknik dan konsep tingkat lanjut untuk profesional keamanan. Pelajari strategi pertahanan yang lebih canggih untuk menghadapi ancaman modern.
                  </p>
                  <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-4">
                    <div className="flex items-center text-indigo-200">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium">{topics.length} Modul Lanjutan</span>
                    </div>
                    <div className="flex items-center text-indigo-200">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                      <span className="text-sm font-medium">Level Lanjut</span>
                    </div>
                    <div className="flex items-center text-indigo-200">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Pembelajaran Mendalam</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Topics Navigation and Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {/* Enhanced Topics List - Mobile Collapsible */}
            <div className="lg:hidden bg-gradient-to-b from-gray-50 to-gray-100 p-4 border-b border-gray-200/50">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-lg text-gray-800 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    Daftar Materi
                  </h3>
                  <ChevronRight className="w-6 h-6 text-gray-500 group-open:rotate-90 transition-transform duration-300" />
                </summary>
                <div className="mt-4 space-y-2">
                  {topics.map((topic, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTopic(index)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center transform hover:scale-105 ${
                        activeTopic === index
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-xl shadow-indigo-500/25'
                          : 'bg-white hover:bg-indigo-50 text-gray-800 border border-gray-100 shadow-md hover:shadow-lg'
                      }`}
                    >
                      <div className={`p-2 rounded-xl mr-3 transition-all duration-300 ${
                        activeTopic === index ? 'bg-white/20 backdrop-blur-sm' : 'bg-indigo-50'
                      }`}>
                        {React.cloneElement(topic.icon, {
                          className: `w-5 h-5 ${activeTopic === index ? 'text-white' : 'text-indigo-600'}`
                        })}
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold block text-sm">{topic.title}</span>
                        <div className="flex items-center mt-1">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            activeTopic === index 
                              ? 'bg-white/20 text-indigo-100' 
                              : 'bg-gray-100 text-gray-500'
                          }`}>
                            Modul {index + 1}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </details>
            </div>

            {/* Enhanced Topics List - Desktop */}
            <div className="hidden lg:block bg-gradient-to-b from-gray-50 to-gray-100 p-6 border-r border-gray-200/50">
              <div className="sticky top-6">
                <h3 className="font-bold text-xl mb-6 text-gray-800 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  Daftar Materi
                </h3>
                
                <div className="space-y-2">
                  {topics.map((topic, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTopic(index)}
                      className={`group w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center transform hover:scale-105 ${
                        activeTopic === index
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-xl shadow-indigo-500/25'
                          : 'bg-white hover:bg-indigo-50 text-gray-800 border border-gray-100 shadow-md hover:shadow-lg'
                      }`}
                    >
                      {activeTopic === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-2xl animate-pulse"></div>
                      )}
                      
                      <div className="relative z-10 flex items-center w-full">
                        <div className={`p-2 rounded-xl mr-3 transition-all duration-300 ${
                          activeTopic === index ? 'bg-white/20 backdrop-blur-sm' : 'bg-indigo-50 group-hover:bg-indigo-100'
                        }`}>
                          {React.cloneElement(topic.icon, {
                            className: `w-5 h-5 ${activeTopic === index ? 'text-white' : 'text-indigo-600'}`
                          })}
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold block text-sm leading-tight">{topic.title}</span>
                          <div className="flex items-center mt-1">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              activeTopic === index 
                                ? 'bg-white/20 text-indigo-100' 
                                : 'bg-gray-100 text-gray-500 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                            }`}>
                              Modul {index + 1} dari {topics.length}
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">{activeTopic + 1}</div>
                    <div className="text-sm text-indigo-500 font-medium">dari {topics.length} modul</div>
                    <div className="mt-2 bg-indigo-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((activeTopic + 1) / topics.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Topic Content */}
            <div className="lg:col-span-3 p-6 md:p-8 bg-white">
              <div className="max-w-4xl">
                {/* Enhanced Topic Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 border-b border-gray-100">
                  <div className={`p-4 rounded-2xl shadow-lg ${
                    activeTopic % 3 === 0 ? 'bg-gradient-to-r from-indigo-500 to-purple-600' :
                    activeTopic % 3 === 1 ? 'bg-gradient-to-r from-purple-500 to-violet-600' :
                    'bg-gradient-to-r from-violet-500 to-fuchsia-600'
                  }`}>
                    {topics[activeTopic]?.icon &&
                      React.cloneElement(topics[activeTopic].icon, {
                        className: "w-8 h-8 text-white"
                      })}
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        Modul {activeTopic + 1}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                        Level Lanjut
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{topics[activeTopic].title}</h3>
                  </div>
                </div>

                {/* Enhanced Content Area - Card sampai batas kiri, konten kanan scroll */}
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Card batas kiri */}
                  <div className="hidden lg:block w-0" />
                  {/* Konten kanan scrollable */}
                  <div
                    className="flex-1 max-h-[70vh] overflow-y-auto custom-scrollbar"
                    style={{ scrollBehavior: 'smooth' }}
                    tabIndex={0}
                    aria-label={`Materi modul ${activeTopic + 1} dari ${topics.length}`}
                  >
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border border-indigo-100">
                      {topics[activeTopic].content}
                      <div className="mt-8 text-right text-xs text-indigo-400 font-semibold">
                        Modul {activeTopic + 1} dari {topics.length}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Navigation Buttons */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    {activeTopic > 0 ? (
                      <button
                        onClick={() => setActiveTopic(activeTopic - 1)}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-indigo-100 hover:to-indigo-200 text-gray-700 hover:text-indigo-700 rounded-2xl transition-all duration-300 group shadow-md hover:shadow-lg transform hover:scale-105"
                      >
                        <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                        <div className="text-left">
                          <div className="font-semibold">Sebelumnya</div>
                          <div className="text-sm opacity-75">{topics[activeTopic - 1].title}</div>
                        </div>
                      </button>
                    ) : (
                      <div></div>
                    )}

                    {activeTopic < topics.length - 1 && (
                      <button
                        onClick={() => setActiveTopic(activeTopic + 1)}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white rounded-2xl transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <div className="text-right mr-2">
                          <div className="font-semibold">Selanjutnya</div>
                          <div className="text-sm opacity-90">{topics[activeTopic + 1].title}</div>
                        </div>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}