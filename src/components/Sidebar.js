import {
  ContainerOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { AppRoute } from '../routes';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link to={AppRoute.dashboard}>Dashboard</Link>, 'dashboard', <PieChartOutlined />),
  getItem(<Link to={AppRoute.budget}>budget</Link>, 'budget', <ContainerOutlined />),
];
const AppSidebar = () => {
  const location = useLocation()
  useEffect(() => {
    }, [location])
  return (
      <Menu
        defaultSelectedKeys={[location.pathname.slice(1,)]}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}
        items={items}
        defaultChecked="dashboard"
      />
  );
};
export default AppSidebar;