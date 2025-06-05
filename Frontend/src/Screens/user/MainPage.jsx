import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Faq from './Faq'

const MainPage = () => {
    useEffect(() => {
        // Smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <div className="relative">
            <NavBar />
            {/* Main content with gradient background */}
            <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative">
                {/* Background pattern overlay */}
                <div
                    className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30`}
                ></div>
                {/* Content sections */}
                <div className="relative z-10">
                    <Home />
                    <About />
                    <Services />
                    <Faq />
                </div>
                {/* Footer */}
                <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 py-8">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-green-100">© 2024 Medicare. All rights reserved.</p>
                        <p className="text-green-200 text-sm mt-2">Developed by Ishwar & Sudhanshu</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default MainPage