
import React, { useState, useEffect } from 'react'
import { FaAmbulance } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: FaAmbulance, title: "Emergency Help", color: "bg-red-100 text-red-600" },
    { icon: MdPersonAdd, title: "Qualified Doctors", color: "bg-blue-100 text-blue-600" },
    { icon: FaUserNurse, title: "Best Professionals", color: "bg-purple-100 text-purple-600" },
    { icon: FaBed, title: "Medical Treatment", color: "bg-green-100 text-green-600" }
  ];

  return (
    <div id="about" className='py-20 px-4 relative overflow-hidden'>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-50"></div>
      
      <div className='container mx-auto max-w-7xl relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left side - Title */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <div className='bg-white rounded-3xl shadow-2xl p-12 text-center relative overflow-hidden'>
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 opacity-5"></div>
              
              <div className="relative z-10">
                <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-4'>
                  ABOUT US
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-800 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className='bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden'>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className='relative z-10 space-y-6'>
                <h2 className='font-bold text-xl md:text-2xl text-gray-800 leading-relaxed'>
                  Caring Hearts, Healing Hands: Where Compassion Meets Healthcare
                </h2>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>We provide special tips and advice for healthcare treatment with the highest level of technology in our hospital.</p>
                  <p>We never compromise on the quality of our care for you.</p>
                  <p>It is practically a home away from home, with a little extra.</p>
                  <p>We set the standards for healthcare, surgery, and medicine.</p>
                </div>

                {/* Feature Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className={`${feature.color} rounded-2xl p-4 flex items-center space-x-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="p-2 bg-white rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                        <feature.icon size={24} />
                      </div>
                      <span className="font-semibold text-sm md:text-base">{feature.title}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-green-600">500+</div>
                    <div className="text-sm text-gray-500">Patients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-500">Doctors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-500">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
