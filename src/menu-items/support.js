// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: '대메뉴4',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: '중메뉴 4-1',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeOutlined,
    },
    {
      id: 'documentation',
      title: '중메뉴 4-2',
      type: 'item',
      url: '/undefined4-2',
      icon: icons.QuestionOutlined,
      external: true,
      target: true,
    },
  ],
};

export default support;
