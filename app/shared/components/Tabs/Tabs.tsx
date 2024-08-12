'use client';

import { PropsWithChildren, ReactNode, useState } from 'react';
import {
  container,
  tab,
  tablist,
  tabpanel,
  tabpanels,
  TabsVariant,
} from './tabs.css';

export type TabData = PropsWithChildren<{
  id: string;
  label: ReactNode;
}>;

type TabsProps<D = TabData> = TabsVariant & {
  items: Array<D>;
  children?: (data: D) => ReactNode;
};

export function Tabs({ items, orientation = 'vertical', children }: TabsProps) {
  const [trigger, setTrigger] = useState<string>(items.at(0)?.id || '');

  const filteredTabContent = items.find(
    (item) => item.id === trigger,
  ) as TabData;

  const tabpanelContent = children
    ? children(filteredTabContent)
    : filteredTabContent.children;

  return (
    <div className={container({ orientation })}>
      <nav className={tablist({ orientation })}>
        {items.map(({ id, label }) => (
          <ul
            key={id}
            className={tab({ isActive: id === trigger })}
            onClick={() => setTrigger(id)}
          >
            {label}
          </ul>
        ))}
      </nav>
      <div className={tabpanels({ orientation })}>
        <div className={tabpanel()}>{tabpanelContent}</div>
      </div>
    </div>
  );
}
