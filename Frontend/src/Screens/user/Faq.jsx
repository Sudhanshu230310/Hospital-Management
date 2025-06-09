
import React, { useState, useEffect } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Faq = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('faq');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I navigate and utilize the features of your website effectively?",
      answer: "To begin using our website, click on the login button. Depending on your role, choose the appropriate option - nurse, admin, or doctor. Enter your ID number and password in the provided fields to access the portal. Once inside, you'll have access to a range of features specific to your job requirements."
    },
    {
      question: "Where can I find my ID number?",
      answer: "The ID number will be sent to your Gmail account when the admin adds you as a doctor, nurse, or admin. However, for testing purposes, you can use the following credentials: ID - 1234 and password - Minu_Susu. These credentials can be used to test the features available to anyone - doctors, nurses, and admins."
    },
    {
      question: "How can I retrieve my forgotten credentials?",
      answer: "To recover your forgotten credentials, navigate to the login page and click on the 'Forgot credentials' option. A pop-up window will appear where you can select your role as a doctor, nurse, or admin, and enter your email address. Your credentials will then be sent to the provided email address."
    },
    {
      question: "What are your visiting hours?",
      answer: "Uninterrupted care, our hospital serves you 24/7. Our committed team is available day and night, ensuring your well-being and providing timely medical assistance. Trust us to be there for you, whenever you need us."
    }
  ];

  return (
    <div id="faq" className='py-20 px-4 relative overflow-hidden'>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-75"></div>
      </div>

      <div className='container mx-auto max-w-4xl relative z-10 px-5 py-6 rounded-lg'>
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
            Frequently Asked Questions
          </h1>
          <div className="w-32 h-1 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Find answers to common questions about our services and platform
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className='space-y-6'>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className='bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100'>
                {/* Question */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className='w-full px-6 md:px-8 py-6 text-left hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset'
                >
                  <div className='flex justify-between items-center'>
                    <h2 className='text-lg md:text-xl font-bold text-gray-800 pr-4'>
                      {faq.question}
                    </h2>
                    <div className={`transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      <div className="bg-green-100 p-2 rounded-full">
                        <FaChevronDown className='text-green-600' size={16} />
                      </div>
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className='px-6 md:px-8 pb-6 border-t border-gray-100'>
                    <div className="pt-4">
                      <p className='text-gray-600 leading-relaxed text-base md:text-lg'>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-green-100 mb-6">Our support team is here to help you 24/7</p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
