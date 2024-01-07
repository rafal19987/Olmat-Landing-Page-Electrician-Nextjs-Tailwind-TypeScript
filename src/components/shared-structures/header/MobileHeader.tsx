'use client';

import { useState } from 'react';
import { Logo } from '@/components/shared-atoms/Logo';
import { Hamburger } from './Hamburger';
import { MobileMenu } from './MobileMenu';

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative flex h-full items-center justify-between lg:hidden">
        <Logo />
        <Hamburger clickHandle={clickHandle} isOpen={isOpen} />
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
