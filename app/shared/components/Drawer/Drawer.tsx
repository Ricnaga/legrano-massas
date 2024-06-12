'use client';

import { createPortal } from 'react-dom';
import { CloseIcon } from '../../icons';
import { UseDrawerProps, useDrawer } from './hooks/useDrawer';

interface DrawerProps extends UseDrawerProps {}

export function Drawer(props: DrawerProps) {
  const {
    isOpen,
    DrawerElement,
    getDrawerProps,
    ButtonElement,
    getButtonProps,
    ContentElement,
    getContentProps,
  } = useDrawer(props);

  return createPortal(
    <DrawerElement data-opened={isOpen} {...getDrawerProps()}>
      <ButtonElement {...getButtonProps()}>
        <CloseIcon />
      </ButtonElement>
      <ContentElement {...getContentProps()} />
    </DrawerElement>,
    document.body,
  );
}
