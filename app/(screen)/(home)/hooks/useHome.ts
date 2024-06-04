import { ComponentProps } from 'react';
import {
  bibliographyStyles,
  containerStyles,
  descriptionStyles,
  imgStyles,
} from '../page.css';
import Image from 'next/image';
import { Typography } from '@/app/shared/components';

export const useHome = () => {
  const containerProps: ComponentProps<'div'> = {
    className: containerStyles,
  };

  const imageProps: ComponentProps<typeof Image> = {
    src: '/logo.png',
    alt: 'logo',
    width: '800',
    height: '600',
    className: imgStyles,
  };

  const bibliographyProps: ComponentProps<'div'> = {
    className: bibliographyStyles,
  };

  const descriptionProps: ComponentProps<'div'> = {
    className: descriptionStyles,
  };

  const typographyProps: ComponentProps<typeof Typography> = {
    variant: 'h3',
    children: 'Legrano',
  };

  const typographyDescriptionProps: ComponentProps<typeof Typography> = {
    variant: 'p',
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum`,
  };

  return {
    containerProps,
    imageProps,
    bibliographyProps,
    descriptionProps,
    typographyProps,
    typographyDescriptionProps,
  };
};
