
import React, { useEffect, useState } from 'react';
import { medLogo } from '../../assets/index';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaUserMd, FaAmbulance } from 'react-icons/fa';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="home" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 rounded-lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-6 py-6">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <div className="text-center lg:text-left space-y-6">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Welcome to
                  <span className="block bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                    MEDICARE
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-green-100 font-light">
                  Where Compassion Meets Excellence
                </p>
              </div>

              {/* Feature Icons */}
              <div className="flex justify-center lg:justify-start space-x-8 py-6">
                <div className="text-center group">
                  <div className="bg-white/20 p-4 rounded-full mb-2 group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                    <FaHeartbeat className="text-2xl text-white mx-auto" />
                  </div>
                  <p className="text-sm text-green-100">24/7 Care</p>
                </div>
                <div className="text-center group">
                  <div className="bg-white/20 p-4 rounded-full mb-2 group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                    <FaUserMd className="text-2xl text-white mx-auto" />
                  </div>
                  <p className="text-sm text-green-100">Expert Doctors</p>
                </div>
                <div className="text-center group">
                  <div className="bg-white/20 p-4 rounded-full mb-2 group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                    <FaAmbulance className="text-2xl text-white mx-auto" />
                  </div>
                  <p className="text-sm text-green-100">Emergency</p>
                </div>
              </div>

              {/* Team Credits */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4 text-center lg:text-left">Development Team</h3>
                <div className="grid grid-cols-2 gap-4 text-center lg:text-left">
                  <div className="space-y-1">
                    <p className="text-green-100 font-medium">Ishwar</p>
                    <p className="text-green-200 text-sm">2023MCB1348</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-green-100 font-medium">Sudhanshu</p>
                    <p className="text-green-200 text-sm">2023MEB1387</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/dLogin"
                  className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  Get Started
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="relative">
              {/* Floating animation wrapper */}
              <div className="animate-float">
                <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl">
                  <img 
                    src={medLogo} 
                    alt="Medicare Logo" 
                    className="w-full h-auto max-w-md mx-auto transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/20 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;
