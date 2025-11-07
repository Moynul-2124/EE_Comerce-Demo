





'use client';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideCurtain } from '../../REDUX/SLICE/showCurtainSlice';

const Curtain = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.curtain.active);

  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        dispatch(hideCurtain());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [active, dispatch]);

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-opacity duration-700 ease-in-out pointer-events-none ${
        active ? 'opacity-100 bg-black' : 'opacity-0'
      }`}
    />
  );
};

export default Curtain;
