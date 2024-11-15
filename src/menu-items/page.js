// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: '인증/보안',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: '로그인',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: true,
    },
    {
      id: 'register1',
      title: '등록',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true,
    },
  ],
};

export default pages;
