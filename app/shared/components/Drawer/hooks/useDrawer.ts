import { useElement } from '@/app/shared/hooks/useElement';
import { closeButton, content, drawer } from '../drawer.css';

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
  const { isOpen, children, side = DrawerSide.right, onClose } = props;

  const { Element: DrawerElement, getProps: getDrawerProps } = useElement({
    element: 'div',
    props: { className: drawer({ side }) },
  });

  const { Element: ButtonElement, getProps: getButtonProps } = useElement({
    element: 'button',
    props: { onClick: () => onClose(), className: closeButton() },
  });

  const { Element: ContentElement, getProps: getContentProps } = useElement({
    element: 'div',
    props: { className: content(), children },
  });

  return {
    isOpen,
    DrawerElement,
    getDrawerProps,
    ButtonElement,
    getButtonProps,
    ContentElement,
    getContentProps,
  };
};
