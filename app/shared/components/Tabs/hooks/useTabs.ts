import { ReactNode, useState } from 'react';
import { TabData } from '../Tabs';
import { TabsVariant } from '../tabs.css';

export type UseTabsProps<D = TabData> = TabsVariant & {
  items: Array<D>;
  children?: (data: D) => ReactNode;
};

export const useTabs = (props: UseTabsProps) => {
  const { items, orientation = 'vertical', children } = props;

  const [trigger, setTrigger] = useState<string>(items.at(0)?.id || '');

  const filteredTabContent = items.find(
    (item) => item.id === trigger,
  ) as TabData;

  const tabpanelContent = children
    ? children(filteredTabContent)
    : filteredTabContent.children;

  return {
    tabpanelContent,
    orientation,
    items,
    trigger,
    setTrigger,
  };
};
