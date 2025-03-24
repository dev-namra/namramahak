import React from 'react';

const ContactCard = () => {
  return (
    <div className="bg-black rounded-4xl p-8 md:p-16 transform transition-transform duration-300 ease-in-out">
      <div className="image-asset mr-12">
        <img
          src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f94_sophie-moore-emoji-face-happy-simplefolio-x-webflow-template.png"
          loading="eager"
          alt="Let’s Get In Touch Today And Get Started With Your Project"
          className="image-size w-38 h-38"
        />
      </div>
      <div className="inner-container w-110">
        <h2 className="display-1 text-neutral-100 mb-5 text-3xl font-bold">
          Let’s get in touch today and get started with <span className="whitespace-nowrap">your project!</span>
        </h2>
        <div className="grid grid-cols-1 gap-y-3">
          <a
            href="mailto:sophie@simplefolio.com"
            className="contact-link flex items-center space-x-2"
          >
            <img
              src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f84_email-icon-contact-simplefolio-x-webflow-template.png"
              alt="Email Icon"
              className="w-5 h-5"
            />
            <div className="text-300 font-bold text-neutral-100">mahaknamra@gmail.com</div>
          </a>
          <a
            href="tel:+44 07552660019"
            className="contact-link flex items-center space-x-2"
          >
            <img
              src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f92_phone-icon-contact-simplefolio-x-webflow-template.png"
              alt="Phone Icon"
              className="w-5 h-5"
            />
            <div className="text-300 font-bold text-neutral-100">+44 07552660019</div>
          </a>
        </div>
      </div>
      <a href="/company-pages/contact" className="absolute top-0 right-0 p-4">
        <div className="text-white large">
          <img
            src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/66454008aab4cd4f422808e8_diagonal-button-arrow-simplefolio-webflow-ecommerce-template.svg"
            alt="Arrow"
            className="size-6"
          />
        </div>
      </a>
    </div>
  );
};

export default ContactCard;
