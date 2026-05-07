'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  containerReveal,
  containerRevealSlow,
  defaultViewport,
  itemReveal,
  itemRevealTight,
} from '../lib/motion';

type RevealPreset = 'container' | 'containerSlow' | 'item' | 'itemTight';
type RevealElement = 'div' | 'h1' | 'h2' | 'h3' | 'p' | 'tr';

const variantsByPreset = {
  container: containerReveal,
  containerSlow: containerRevealSlow,
  item: itemReveal,
  itemTight: itemRevealTight,
};

const motionComponents = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  tr: motion.tr,
};

interface RevealProps {
  as?: RevealElement;
  children: React.ReactNode;
  className?: string;
  preset?: RevealPreset;
  animateOnLoad?: boolean;
}

export function Reveal({
  as = 'div',
  children,
  className,
  preset = 'item',
  animateOnLoad = false,
}: RevealProps) {
  const Component = motionComponents[as];
  const triggerProps = animateOnLoad
    ? { animate: 'visible' as const }
    : { whileInView: 'visible' as const, viewport: defaultViewport };

  return (
    <Component
      variants={variantsByPreset[preset]}
      initial="hidden"
      className={className}
      {...triggerProps}
    >
      {children}
    </Component>
  );
}
