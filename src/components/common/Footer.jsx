export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Namra Mahak</h2>
          <p className="text-gray-400 max-w-sm">
            I’m a frontend developer passionate about building interactive, accessible, and performant web experiences.
          </p>
        </div>

        {/* Center Section - Links */}
        <div className="flex flex-col space-y-3 md:items-start items-center">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right Section - Contact & Social */}
        <div className="space-y-4 text-center md:text-left">
          <div>
            <p>mahaknamra@gmail.com</p>
            <p>(+44) 755266019</p>
            <p>Newcastle Upon Tyne<br />United Kingdom</p>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 text-gray-400">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-white transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" >
                <path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.521A8.18 8.18 0 0022 5.92a8.273 8.273 0 01-2.357.637 4.11 4.11 0 001.804-2.27 8.224 8.224 0 01-2.605.977 4.104 4.104 0 00-6.993 3.743A11.65 11.65 0 013.15 4.785a4.106 4.106 0 001.27 5.473 4.073 4.073 0 01-1.859-.513v.052a4.104 4.104 0 003.292 4.022 4.09 4.09 0 01-1.853.07 4.106 4.106 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-10 text-sm">
        Made with <a href="https://reactjs.org" className="underline hover:text-white" target="_blank" rel="noreferrer">React</a> &amp; <a href="https://tailwindcss.com" className="underline hover:text-white" target="_blank" rel="noreferrer">Tailwind CSS</a>
      </p>
    </footer>
  );
}
