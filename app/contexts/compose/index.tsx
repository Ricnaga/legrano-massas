/* eslint react/display-name: off */
import { ComponentProps, FC, PropsWithChildren } from 'react';
import { MenuProvider } from '../menu';

function createComposition(
  ...components: FC<PropsWithChildren>[]
): FC<PropsWithChildren> {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({
        children,
      }: ComponentProps<FC<PropsWithChildren>>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>,
  );
}

const providers = [MenuProvider];

export const ComposeProviders = createComposition(...providers);
