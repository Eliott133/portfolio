import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { VscDebugStart } from 'react-icons/vsc';
import { GrCubes } from 'react-icons/gr';
import { BsController } from 'react-icons/bs';
import { LiaCarSideSolid } from 'react-icons/lia';

const iconMap = {
  FaGithub,
  FaArrowRight,
  VscDebugStart,
  GrCubes,
  BsController,
  LiaCarSideSolid
};

export const Icon = ({ 
  name, 
  size = 24,
  className = '',
  ...props 
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon ${name} not found`);
    return null;
  }

  return <IconComponent size={size} className={className} {...props} />;
};