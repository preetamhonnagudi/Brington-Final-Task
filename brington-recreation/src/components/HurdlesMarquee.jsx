import React from "react";

const HurdlesMarquee = () => {
  const items = Array(8).fill("HURDLES");

  return (
    <div className="w-full bg-white py-4 overflow-hidden border-t border-b border-white">
      <div className="animate-marquee whitespace-nowrap flex items-center">

        {items.map((text, index) => (
          <div key={index} className="flex items-center mx-10">
            
            {/* Text */}
            <span className="text-teal-600 text-4xl font-semibold tracking-wide">
              {text}
            </span>

            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 31 31"
              className="ml-4 fill-teal-600"
            >
              <path d="M9.655 6.345l-.968-2.425L6.26 5.033l.968 2.425zm-4.89 2.903l-2.424-.969L.055 10.74l2.424.968zm-.748 6.217H.002v2.607h4.014zm2.33 5.23l-2.345.776.839 2.537 2.344-.776zm5.333 3.062l-.936 2.437 2.452.942.936-2.437zM16.003 0h-2.607v4.014h2.607zm7.357 4.613l-2.345 3.157h-3.664l-3.573 4.794-2.458-1.83 1.565-1.839c.974-1.085.04-2.751-1.356-2.645l-1.931.148c-1.841.14-3.462 1.28-4.171 2.99l-.283.682c-.185.367-.18.815.07 1.151l1.709 2.302L5 19.997h3.007l3.834-3.535 2.436 1.812 1.57 6.5-2.74 1.738 1.092 1.72 7.91-5.017c.594-.386.889-1.103.73-1.79l-1.082-4.674 2.922-4.197h4.657V6.983h-3.473c-.745 0-1.447.357-1.883.964" />
            </svg>

          </div>
        ))}

      </div>

      {/* Duplicate for smooth infinite scroll */}
      <div className="animate-marquee2 whitespace-nowrap flex items-center absolute top-4">

        {items.map((text, index) => (
          <div key={index} className="flex items-center mx-10">
            
            <span className="text-teal-600 text-4xl font-semibold tracking-wide">
              {text}
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 31 31"
              className="ml-4 fill-teal-600"
            >
              <path d="M9.655 6.345l-.968-2.425L6.26 5.033l.968 2.425zm-4.89 2.903l-2.424-.969L.055 10.74l2.424.968zm-.748 6.217H.002v2.607h4.014zm2.33 5.23l-2.345.776.839 2.537 2.344-.776zm5.333 3.062l-.936 2.437 2.452.942.936-2.437zM16.003 0h-2.607v4.014h2.607zm7.357 4.613l-2.345 3.157h-3.664l-3.573 4.794-2.458-1.83 1.565-1.839c.974-1.085.04-2.751-1.356-2.645l-1.931.148c-1.841.14-3.462 1.28-4.171 2.99l-.283.682c-.185.367-.18.815.07 1.151l1.709 2.302L5 19.997h3.007l3.834-3.535 2.436 1.812 1.57 6.5-2.74 1.738 1.092 1.72 7.91-5.017c.594-.386.889-1.103.73-1.79l-1.082-4.674 2.922-4.197h4.657V6.983h-3.473c-.745 0-1.447.357-1.883.964" />
            </svg>

          </div>
        ))}

      </div>
    </div>
  );
};

export default HurdlesMarquee;

