import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

export const Navigate = () => {
  const items = [
  {
    label: (
    <a href="/mixes" rel="noopener noreferrer">
        Готовые миксы
      </a>
    ),
    key: '1',
  },
  {
    label: (
    <a href="/corms" rel="noopener noreferrer">
        Отдельные виды кормов
      </a>
    ),
    key: '2',
  },
  {
    label: (
      <a href="/kits" rel="noopener noreferrer">
        Готовые комплекты
      </a>
    ),
    key: '3',
  },
  {
    label: (
      <a href="/accessories" rel="noopener noreferrer">
        Аксессуары и другое
      </a>
    ),
    key: '4',
  },
];

    return (
        <div>
            <ul className='flex gap-[1rem]'>
                <li>
<Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Каталог
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
                       </li>
                <li><a href="/about">О проекте</a></li>
                <li><a href="/birds">Птицы</a></li>
                <li><a href="/ahch">Пожертвования</a></li>
            </ul>
        </div>
    )
}