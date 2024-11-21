// assets
import {
  ChromeOutlined,
  QuestionOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  SnippetsOutlined,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: '관리자',
  type: 'group',
  children: [
    {
      id: 'memberManagement',
      title: '회원관리',
      type: 'item',
      // url: '/sample-page',
      url: '/memberManagement',
      icon: SnippetsOutlined,
    },
    // {
    //   id: 'documentation',
    //   title: '중메뉴 4-2',
    //   type: 'item',
    //   url: '/undefined4-2',
    //   icon: icons.QuestionOutlined,
    //   external: true,
    //   target: true,
    // },
  ],
};

export default support;
