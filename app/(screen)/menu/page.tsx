'use client';

import { categories } from '@/app/contexts/menu/data';
import { TabData, Tabs } from '@/app/shared/components';
import { MenuCard } from './_components/MenuCard/MenuCard';

export default function Page() {
  const data: Array<TabData> = categories.map(({ id, category }) => ({
    id,
    label: category,
  }));

  return <Tabs items={data}>{(item) => <MenuCard id={item.id} />}</Tabs>;
}
