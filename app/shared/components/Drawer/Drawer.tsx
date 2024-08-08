'use client';

import { createPortal } from 'react-dom';
import { CloseIcon } from '../../icons';
import { UseDrawerProps, useDrawer } from './hooks/useDrawer';

interface DrawerProps extends UseDrawerProps {}

export function Drawer(props: DrawerProps) {
  const {
    Backdrop,
    getBackdropProps,
    Drawer,
    getDrawerProps,
    CloseButton,
    getCloseButtonProps,
    Content,
    getContentProps,
  } = useDrawer(props);

  return createPortal(
    <Backdrop {...getBackdropProps()}>
      <Drawer {...getDrawerProps()}>
        <CloseButton {...getCloseButtonProps()}>
          <CloseIcon />
        </CloseButton>
        <Content {...getContentProps()} />
      </Drawer>
    </Backdrop>,
    document.body,
  );
}
