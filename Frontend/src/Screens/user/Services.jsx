import React, { useState, useEffect } from 'react'
import { FaSyringe, FaUserMd, FaXRay, FaAmbulance, FaFlask, FaMicroscope } from 'react-icons/fa'

const Services = () => {
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

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    { title: 'Vaccine', icon: FaSyringe, color: 'from-green-400 to-green-600', description: 'Comprehensive vaccination programs' },
    { title: 'Surgery', icon: FaUserMd, color: 'from-blue-400 to-blue-600', description: 'Advanced surgical procedures' },
    { title: 'Diagnostics', icon: FaXRay, color: 'from-purple-400 to-purple-600', description: 'State-of-the-art diagnostic services' },
    { title: 'Emergency', icon: FaAmbulance, color: 'from-red-400 to-red-600', description: '24/7 emergency care' },
    { title: 'Radiology', icon: FaXRay, color: 'from-indigo-400 to-indigo-600', description: 'Advanced imaging services' },
    { title: 'Laboratory', icon: FaFlask, color: 'from-yellow-400 to-orange-500', description: 'Comprehensive lab testing' }
  ];

  return (
    <div id="services" className='py-10 sm:py-16 lg:py-20 px-2 sm:px-4 relative overflow-hidden'>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-2 sm:left-10 w-32 h-32 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-10 w-40 h-40 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-75"></div>
      </div>

      <div className='container mx-auto max-w-7xl relative z-10'>
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 px-2'>
            OUR SERVICES
          </h1>
          <div className="w-16 sm:w-24 lg:w-32 h-1 bg-white mx-auto rounded-full mb-3 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-100 max-w-2xl mx-auto px-4">
            Comprehensive healthcare services delivered with excellence and compassion
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {services.map((service, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-700 hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className='group relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden h-48 sm:h-56 lg:h-64 cursor-pointer'>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-90 transition-all duration-300`}></div>

                {/* Content */}
                <div className='relative z-10 h-full flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6 text-center'>
                  {/* Icon */}
                  <div className='mb-3 sm:mb-4 lg:mb-6 p-2 sm:p-3 lg:p-4 bg-gray-100 rounded-xl sm:rounded-2xl group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110'>
                    <service.icon 
                      size={window.innerWidth < 640 ? 32 : window.innerWidth < 1024 ? 40 : 48} 
                      className='text-gray-600 group-hover:text-white transition-colors duration-300'
                    />
                  </div>

                  {/* Title */}
                  <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-2 sm:mb-3'>
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className='text-xs sm:text-sm lg:text-base text-gray-600 group-hover:text-white/90 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 px-1'>
                    {service.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gray-100 rounded-full -translate-y-6 sm:-translate-y-8 lg:-translate-y-10 translate-x-6 sm:translate-x-8 lg:translate-x-10 group-hover:bg-white/20 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gray-100 rounded-full translate-y-5 sm:translate-y-6 lg:translate-y-8 -translate-x-5 sm:-translate-x-6 lg:-translate-x-8 group-hover:bg-white/20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-8 sm:mt-12 lg:mt-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 max-w-2xl mx-2 sm:mx-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">Need Immediate Care?</h3>
            <p className="text-sm sm:text-base lg:text-lg text-green-100 mb-4 sm:mb-5 lg:mb-6 px-2">Our team is available 24/7 to provide you with the best medical care.</p>
            <button className="bg-white text-green-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services