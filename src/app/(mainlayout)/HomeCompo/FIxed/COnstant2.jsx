


'use client';
import React, { useEffect, useState } from 'react';

const COnstant2 = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 5); // 5-hour sale

    const updateTimer = () => {
      const now = new Date();
      const diff = endTime - now;

      if (diff <= 0) {
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

      setTimeLeft({ hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-yellow-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-900 mb-4">
          🎉 BIG SALE TODAY
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Hurry up! Offer ends in:
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 sm:gap-6 text-2xl sm:text-3xl font-bold text-pink-600">
          <div>{timeLeft.hours}h</div>
          <div>{timeLeft.minutes}m</div>
          <div>{timeLeft.seconds}s</div>
        </div>
      </div>
    </section>
  );
};

export default COnstant2;
