import React from 'react';
import {SquaresPlusIcon, Square3Stack3DIcon, CodeBracketSquareIcon, RectangleGroupIcon} from "@heroicons/react/24/solid";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-12 px-6 md:px-20 py-16 text-white bg-[#151312]">
      {/* Heading */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-8xl font-bold leading-none tracking-tight font-bebas">
          FRONT-END <br /> DEVELOPER
        </h1>
      </div>

      {/* Paragraph */}
      <div className="max-w-2xl text-gray-300 text-lg mx-auto md:mx-0">
        <p className='font-bebas'>
          Passionate about building responsive and interactive web applications.
          Turning ideas into accessible, performant, and pixel-perfect experiences.
        </p>
      </div>

      {/* Numbers */}
      <div className="flex flex-wrap justify-center md:justify-start gap-12">
        {[
          { label: 'YEARS OF EXPERIENCE', value: '+2' },
          { label: 'PROJECTS COMPLETED', value: '+10' }
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <h2 className="text-3xl md:text-7xl font-bold">{value}</h2>
            <p className="text-sm md:text-md text-gray-400 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Skills Cards */}
      <div className="flex flex-col gap-y-6">

        <div className='flex gap-6'>
          {/* Card 1: Automation & APS */}
          <div className="bg-[#f46c38] border border-purple-400/30 rounded-xl p-6 flex items-center justify-between hover:scale-[1.02] transition-transform group">
            <div className="flex items-center gap-4">
              <SquaresPlusIcon className="size-12" />
              <p className="font-medium text-sm">
                AUTOMATION | AUTODESK PLATFORM SERVICES
              </p>
            </div>
          </div>

          {/* Card 2: Tech Stack */}
          <div className="bg-[#c5ff41] border border-blue-400/30 rounded-xl p-6 flex items-center justify-between hover:scale-[1.02] transition-transform group">
            <div className="flex items-center gap-4">
            <CodeBracketSquareIcon className="size-12" />
              <p className="font-medium text-sm">
                REACT, NODE.JS, TAILWIND, TYPESCRIPT
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Data & Dashboards */}
        <div className="bg-[#ffc100] border border-yellow-400/30 rounded-xl p-6 flex items-center justify-between hover:scale-[1.02] transition-transform group">
          <div className="flex items-center gap-4">
            <Square3Stack3DIcon className="size-12" />
            <p className="font-medium text-sm">
              POWER BI | DATA VISUALIZATION | AUTOMATE
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
