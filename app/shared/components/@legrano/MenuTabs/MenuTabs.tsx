'use client';

import { PropsWithChildren, useMemo } from 'react';
import {
  MenuTabContentData,
  UseMenuTabsProps,
  useMenuTabs,
} from './hooks/useMenuTabs';
import { containerStyles, contentStyles, listStyles } from './menuTabs.css';

type MenuTabsProps<T extends string = string> = UseMenuTabsProps<T>;

export function MenuTabs<T extends string = string>(props: MenuTabsProps<T>) {
  const { trigger, triggerProps, data, orientation } = useMenuTabs<T>(props);

  const TriggerMemoized = (tab: MenuTabContentData<T>) =>
    useMemo(() => <div {...triggerProps(tab.id, tab.label)} />, [tab]);

  const ContentMemoized = (
    props: PropsWithChildren<Pick<MenuTabContentData<T>, 'id'>>,
  ) =>
    useMemo(
      () => <div className={contentStyles}>{props.children}</div>,
      [props],
    );

  return (
    <div className={containerStyles({ orientation })}>
      <div className={listStyles({ orientation })}>
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
