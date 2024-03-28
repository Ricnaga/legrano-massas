'use client';

import * as React from 'react';

import { closeButton, content, drawer } from './drawer.css';

export enum DrawerSide {
  left = 'left',
  right = 'right',
}

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  side?: keyof typeof DrawerSide;
  onClose: () => void;
};

export function Drawer({
  isOpen,
  children,
  side = DrawerSide.right,
  onClose,
}: Props) {
  return (
    <div data-opened={isOpen} className={drawer({ side })}>
      <button onClick={onClose} className={closeButton()}>X</button>
      <div className={content()}>{children}</div>
    </div>
  );
}
