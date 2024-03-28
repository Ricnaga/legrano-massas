'use client';

import { Tabs } from '@/app/shared/components';
import { TabKeys } from '@/app/shared/components/Tabs/hooks/useTabs';
import { container } from './page.css';
import { MenuCard } from './_components/MenuCard/MenuCard';
import { categories } from '@/app/contexts/menu/data';

export default function Page() {
  const data: TabKeys = categories.map(({ id, category }) => ({
    id,
    label: category,
    children: <MenuCard />,
  }));

  return (
    <div className={container}>
      <Tabs data={data} />
    </div>
  );
}
