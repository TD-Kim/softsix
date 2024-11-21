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
  title: '게시판',
  type: 'group',
  children: [
    // {
    //   id: 'login1',
    //   title: '로그인',
    //   type: 'item',
    //   url: '/login',
    //   icon: icons.LoginOutlined,
    //   target: true,
    // },
    {
      id: 'notice',
      title: '공지사항',
      type: 'item',
      url: '/notice',
      icon: icons.ProfileOutlined,
      // target: true,
    },
  ],
};

export default pages;
