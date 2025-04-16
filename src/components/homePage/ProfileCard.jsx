import React from "react";
import profilePic from '../../assets/person/profile.jpeg'

export default function ProfileCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto p-6 bg-white border border-white/10 rounded-2xl shadow-lg text-center text-white transform transition-transform hover:scale-[1.015]">
      
      {/* Profile Image */}
      <img
        src={profilePic}
        alt="Profile"
        className="relative z-10 size-28 rounded-xl mx-auto border-4 border-white/10 object-cover"
      />

      {/* Name & Bio */}
      <h2 className="mt-4 text-xl font-semibold">NAMRA MAHAK</h2>
      <p className="mt-2 text-sm text-gray-300">A Front-End Developer crafting pixel-perfect interfaces with purpose.</p>

      {/* Social Icons */}
      <div className="mt-4 flex justify-center gap-4 z-10 relative">
        {[
          {
            href: "https://try.webflow.com/sawad",
            src: "https://cdn.prod.website-files.com/66cf60cc29b4f70b379f8183/66cf77547d66c365a233e239_dribbble%20(1).svg",
            alt: "Dribbble",
          },
          {
            href: "https://try.webflow.com/sawad",
            src: "https://cdn.prod.website-files.com/66cf60cc29b4f70b379f8183/66cf76a05ae9bf557237b39d_twitter%20(5).svg",
            alt: "Twitter",
          },
          {
            href: "https://try.webflow.com/sawad",
            src: "https://cdn.prod.website-files.com/66cf60cc29b4f70b379f8183/66d209bf309c532bd8674aca_instagram%20(1).svg",
            alt: "Instagram",
          },
          {
            href: "mailto:your@email.com",
            src: "https://cdn.prod.website-files.com/66cf60cc29b4f70b379f8183/66cf77504821f24f6e66f52f_mail%20(1).svg",
            alt: "Email",
          },
        ].map(({ href, src, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noreferrer">
            <img src={src} alt={alt} className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
        ))}
      </div>
    </div>
  );
}
