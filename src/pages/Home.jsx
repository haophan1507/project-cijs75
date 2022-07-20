import { Menu } from 'antd';
import React, { useContext } from 'react';
import { MeContext } from '../context/MeContext';
import ListProduct from './ListProduct';

function Home() {
  const meCtx = useContext(MeContext);

  const menuItems = [
    {
      key: 'home',
      label: 'Home',
    },
    {
      key: 'name',
      label: meCtx.userInfo.username,
    },
  ];

  return (
    <>
      <Menu mode="horizontal" theme="dark" items={menuItems} />
      <ListProduct />
    </>
  );
}

export default Home;
