import React from 'react';
import { ReactNode, useState } from 'react';
import * as S from './Tabs.styled';

interface Tab {
  id: string;
  title: string | ReactNode;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  if (tabs.length === 0) {
    throw Error('Tabs is empty???');
  }

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <S.TabTitleBar>
        {tabs.map((item) => {
          return (
            <S.TabTitle
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              active={item.id === activeTab}
            >
              {item.title}
            </S.TabTitle>
          );
        })}
      </S.TabTitleBar>
      <div>{tabs.find((item) => item.id === activeTab)?.content}</div>
    </div>
  );
};
