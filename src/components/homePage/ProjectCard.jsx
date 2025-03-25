
import React from 'react';

const ProjectCard = ({ title, category, date, imageUrl, logoUrl, link }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
      <a href={link} className="block w-full group">
        {/* Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="relative">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover"
            />
            {/* Overlay Button */}
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img
                src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/66454008aab4cd4f422808e8_diagonal-button-arrow-simplefolio-webflow-ecommerce-template.svg"
                alt="Arrow"
                className="w-6 h-6"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Project Logo */}
            <div className="flex items-center mb-4">
              <img
                src={logoUrl}
                alt={title}
                className="w-8 h-8 mr-4"
              />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>

            {/* Project Details */}
            <div className="flex justify-between text-sm text-gray-600">
              <span>{category}</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const ProjectCardBig = () => {
  return(
    <div className="flex justify-center items-center flex-grow">
      <img
        src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f99_sophie-moore-portrait-simplefolio-x-webflow-template.jpg"
        alt="Namra Mahak Portrait"
        className="object-cover w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-4xl shadow-lg"
        loading="eager"
        sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 39vw, 387.984375px"
        srcSet="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f99_sophie-moore-portrait-simplefolio-x-webflow-template-p-500.jpg 500w, https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f99_sophie-moore-portrait-simplefolio-x-webflow-template-p-800.jpg 800w, https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f99_sophie-moore-portrait-simplefolio-x-webflow-template-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f99_sophie-moore-portrait-simplefolio-x-webflow-template.jpg 1560w"
      />
    </div>
  )
}

const ProjectCardBigData =() => {
  return(
   <div className='p-4 md:p-16 rounded-4xl flex flex-col justify-end bg-gray-600 flex-grow'>
    <i></i>
    <h1>Project Heading</h1>
    <h2>Project Description</h2>
   </div>
  )
}



export { ProjectCard, ProjectCardBig, ProjectCardBigData };


