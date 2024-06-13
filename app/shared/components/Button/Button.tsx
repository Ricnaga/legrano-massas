import { ComponentProps } from 'react';
import { ButtonVariants, styles } from './button.css';

type ButtonBaseProps = Omit<ComponentProps<'button'>, 'className'>;

type ButtonProps = ButtonBaseProps & ButtonVariants;

export function Button({
  variant = 'primary',
  radius = 'lg',
  isIconButton = false,
  ...rest
}: ButtonProps) {
  return (
    <button className={styles({ variant, isIconButton, radius })} {...rest} />
  );
}
