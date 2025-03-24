import React from 'react';
import Lottie from 'lottie-react';
import designerAnimation from '../../assets/animations/Hijabi.json'; 

const AboutMeSection = () => {
  return (
    <section className="py-16 bg-[#ffdf90] rounded-4xl overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Half - Animated Illustration */}
          <div className="w-full md:w-1/2 h-96 md:h-auto">
            <Lottie
              animationData={designerAnimation}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Right Half (Text Section) */}
          <div className="w-full md:w-1/2 flex-grow">
            <h2 className="text-3xl font-bold mb-4">
              I've been developg digital products for more than{' '}
              <span className="text-primary">2 years</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Vitae enim ut interdum id mi sit id aliquam purus urna ipsum augue lorem est metus turpis
              tincidunt vitae. Sollicitudin sit aliquet nunc a enim commodo.
            </p>
            <a
              href="/company-pages/about"
              className="inline-block bg-black text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition"
            >
              More about me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
