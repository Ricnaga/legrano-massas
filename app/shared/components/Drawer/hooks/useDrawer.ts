import { useElement } from '@/app/shared/hooks/useElement';
import {
  backdropStyles,
  drawerStyles,
  closeButtonStyles,
  contentStyles,
} from '../drawer.css';

export enum DrawerSide {
  left = 'left',
  right = 'right',
  top = 'top',
  bottom = 'bottom',
}

export type UseDrawerProps = {
  isOpen: boolean;
  children: React.ReactNode;
  side?: keyof typeof DrawerSide;
  onClose: () => void;
};

export const useDrawer = (props: UseDrawerProps) => {
  const { isOpen = false, children, side = DrawerSide.left, onClose } = props;

  const { Element: Backdrop, getProps: getBackdropProps } = useElement({
    element: 'div',
    props: { className: backdropStyles({ isOpen }) },
  });

  const { Element: Drawer, getProps: getDrawerProps } = useElement({
    element: 'div',
    props: { className: drawerStyles({ isOpen, side }) },
  });

  const { Element: CloseButton, getProps: getCloseButtonProps } = useElement({
    element: 'button',
    props: { onClick: () => onClose(), className: closeButtonStyles() },
  });

  const { Element: Content, getProps: getContentProps } = useElement({
    element: 'div',
    props: { className: contentStyles(), children },
  });

  return {
    Backdrop,
    getBackdropProps,
    Drawer,
    getDrawerProps,
    CloseButton,
    getCloseButtonProps,
    Content,
    getContentProps,
  };
};
