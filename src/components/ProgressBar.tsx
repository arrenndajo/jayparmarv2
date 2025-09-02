import React, { useState, useEffect } from 'react';

const ProgressBar: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = Math.round((totalScroll / windowHeight) * 100);
      setScrollPercent(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div 
        className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 ease-out"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};

export default ProgressBar;