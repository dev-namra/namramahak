import React from 'react';

const HeroCard = () => {
  return (
    <div className="flex flex-col items-start text-left p-8 bg-[#e3e3ff] mt-16 md:mt-36 rounded-4xl flex-grow">
      {/* Avatar and Chat Button Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <img
            src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/664ba4aa263d30ac50babb80_sophie-moore-avatar-bg-dark-simplefolio-webflow-ecommerce-template.jpg"
            alt="Namra Mahak Avatar"
            className="w-24 h-24 rounded-full transform rotate-12"
          />
          <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full"></div>
        </div>
        <a href="/contact" className="inline-flex items-center py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <span>Let’s chat!</span>
          <img
            src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f67_chat-simplefolio-x-webflow-template.png"
            alt="Chat Icon"
            className="w-5 h-5 ml-2"
          />
        </a>
      </div>

      {/* Name and Description Section */}
      <h1 className="text-4xl font-bold text-gray-900 mb-2 md:mb-8 max-w-lg">
        I’m Namra Mahak, a Frontend Developer from the United Kingdom
      </h1>
      <p className="text-lg text-gray-700 max-w-lg">
        Ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et erat donec pulvinar enim. Potent adipiscing consectetur adipiscing elit aliquam.
      </p>
    </div>
  );
};

export default HeroCard;
