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
import { useTabs, UseTabsProps } from './hooks/useTabs';

export type TabData = PropsWithChildren<{
  id: string;
  label: ReactNode;
}>;

type TabsProps = UseTabsProps;

export function Tabs(props: TabsProps) {
  const { tabpanelContent, orientation, items, trigger, setTrigger } =
    useTabs(props);

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
