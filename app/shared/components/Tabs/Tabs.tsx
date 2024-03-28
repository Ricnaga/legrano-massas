'use client';

import { PropsWithChildren, useMemo } from 'react';
import { TabContentData, UseTabsProps, useTabs } from './hooks/useTabs';
import { containerStyles, contentStyles, listStyles } from './tabs.css';

interface TabsProps<T extends string = string> extends UseTabsProps<T> {}

export function Tabs<T extends string = string>(props: TabsProps<T>) {
  const { trigger, triggerProps, data } = useTabs<T>(props);

  const TriggerMemoized = (tab: TabContentData<T>) =>
    useMemo(() => <div {...triggerProps(tab.id, tab.label)} />, [tab]);

  const ContentMemoized = (
    props: PropsWithChildren<Pick<TabContentData<T>, 'id'>>,
  ) =>
    useMemo(
      () => <div className={contentStyles}>{props.children}</div>,
      [props],
    );

  return (
    <div className={containerStyles({ orientation: 'vertical' })}>
      <div className={listStyles({ orientation: 'vertical' })}>
        {data.map((tab) => (
          <TriggerMemoized key={tab.id} id={tab.id} label={tab.label} />
        ))}
      </div>
      {data.map(
        (tab) =>
          tab.id === trigger && (
            <ContentMemoized id={tab.id} key={tab.id}>
              {tab.children}
            </ContentMemoized>
          ),
      )}
    </div>
  );
}
