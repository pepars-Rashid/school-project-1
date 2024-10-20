"use client"
import React, { useRef, useEffect } from 'react';

const CustomScrollbar = ({ children }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      const contentHeight = container.scrollHeight - container.clientHeight;
      const thumb = document.querySelector('.custom-thumb');
      const thumbHeight = thumb.clientHeight;
      const trackHeight = container.clientHeight - thumbHeight;
      const scrollRatio = container.scrollTop / contentHeight;
      thumb.style.top = `${scrollRatio * trackHeight}px`;
    };

    const container = scrollContainerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-content" ref={scrollContainerRef}>
        {children}
      </div>
      <div className="custom-scrollbar">
        <div className="custom-thumb"></div>
      </div>
    </div>
  );
};

export default CustomScrollbar;
