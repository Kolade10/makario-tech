import { useEffect, useState } from 'react';

// Custom Cursor Component
export default function CustomCursorContainer({
  children,
  width = '100%',
  height = '100%',
  cursorSize = 40,
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Update cursor position within the container
  const handleMouseMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;
    setPosition({ x, y });
    setIsVisible(true);
  };

  // Hide cursor when mouse leaves the container
  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{ width, height, cursor: 'none' }} // Hide default cursor
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Custom Cursor */}
      <div
        className={`grid justify-center items-center grid-flow-col absolute bg-black text-white rounded-full flex items-center justify-between pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <span className="ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m14 7l-5 5m0 0l5 5"
            />
          </svg>
        </span>
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m10 17l5-5m0 0l-5-5"
            />
          </svg>
        </span>
      </div>

      {/* Content passed as children */}
      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  );
}
