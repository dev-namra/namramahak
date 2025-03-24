import React from 'react';

const PortfolioImage = () => {
  return (
    <div className="flex justify-center items-center mt-16 md:mt-36 flex-grow">
      <img
        src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f99_sophie-moore-portrait-simplefolio-x-webflow-template.jpg"
        alt="Namra Mahak Portrait"
        className="object-cover w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-4xl shadow-lg"
        loading="eager"
        sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 39vw, 387.984375px"
        srcSet="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f99_sophie-moore-portrait-simplefolio-x-webflow-template-p-500.jpg 500w, https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f99_sophie-moore-portrait-simplefolio-x-webflow-template-p-800.jpg 800w, https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f99_sophie-moore-portrait-simplefolio-x-webflow-template-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f99_sophie-moore-portrait-simplefolio-x-webflow-template.jpg 1560w"
      />
    </div>
  );
};

export default PortfolioImage;
