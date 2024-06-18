import {
  ComponentProps,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import { DrawerVariants, triggerStyles } from '../tabs.css';
import { useMenuContext } from '@/app/contexts/menu';

export type TabContentData<T extends string> = { id: T; label: ReactNode };

export type TabKeys<T extends string = string> = Array<
  PropsWithChildren<TabContentData<T>>
>;

export type UseTabsProps<T extends string = string> = DrawerVariants & {
  data: TabKeys<T>;
  defaultValue?: T;
};

export const useTabs = <T extends string = string>({
  data,
  defaultValue,
  orientation = 'horizontal',
}: UseTabsProps<T>) => {
  const { setCategoryId } = useMenuContext();
  const [trigger, setTrigger] = useState<string | null>(
    defaultValue || data.at(0)?.id || null,
  );

  const triggerProps: (tabId: T, label: ReactNode) => ComponentProps<'div'> =
    useCallback(
      (tabId, label) => ({
        onClick: () => {
          setCategoryId(tabId);
          setTrigger(tabId);
        },
        children: label,
        className: triggerStyles({ isActive: Object.is(trigger, tabId) }),
      }),
      [trigger, setCategoryId],
    );

  return {
    trigger,
    triggerProps,
    data,
    orientation,
  };
};
