import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      className="relative h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 148, 148, 0.7), rgba(0, 115, 115, 0.7)), url('https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2014/01/04/Photos/sari--621x414.jpg')`
      }}
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to <span className="text-yellow-300">Amora Collections</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
          Discover Exquisite Sarees, Elegant Lehengas, and Premium Ethnic Wear for Every Occasion
        </p>
        <button
          onClick={scrollToProducts}
          className="group bg-white text-[#009494] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-300 hover:text-gray-800 transform hover:scale-105 shadow-2xl"
        >
          Explore Collection
          <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-white rounded-full opacity-20 animate-float-delayed"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      <style>
        {`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(-5px) rotate(-5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite 1s;
        }
      `}
      </style>
    </section>
  );
};

export default HeroSection;