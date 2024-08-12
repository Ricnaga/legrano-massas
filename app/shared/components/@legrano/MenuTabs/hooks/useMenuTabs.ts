import {
  ComponentProps,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import { TabsVariants, triggerStyles } from '../menuTabs.css';
import { useMenuContext } from '@/app/contexts/menu';

export type MenuTabContentData<T extends string> = { id: T; label: ReactNode };

export type TabKeys<T extends string = string> = Array<
  PropsWithChildren<MenuTabContentData<T>>
>;

export type UseMenuTabsProps<T extends string = string> = TabsVariants & {
  data: TabKeys<T>;
  defaultValue?: T;
};

export const useMenuTabs = <T extends string = string>({
  data,
  defaultValue,
  orientation = 'horizontal',
}: UseMenuTabsProps<T>) => {
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
