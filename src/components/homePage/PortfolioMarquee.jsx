import { useEffect, useRef } from "react";

const PortfolioMarquee = () => {
  const pathRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let offset = 0;
    const speed = 1;

    const animate = () => {
      offset = (offset - speed) % 1000;
      if (textRef.current) {
        textRef.current.setAttribute("startOffset", `${offset}`);
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full py-10 overflow-hidden">
      <svg viewBox="0 0 1200 200" className="w-full h-[200px]">
        <defs>
          <path
            id="marqueePath"
            d="M0,100 C300,200 900,0 1200,100"
            fill="transparent"
            ref={pathRef}
          />
        </defs>
        <text fontSize="40" fill="#ffffff" fontWeight="bold">
          <textPath
            href="#marqueePath"
            ref={textRef}
            startOffset="0"
            spacing="auto"
          >
            Crafting seamless interfaces ✦ Building modern web experiences ✦ 
            Crafting seamless interfaces ✦ Building modern web experiences ✦
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default PortfolioMarquee;
