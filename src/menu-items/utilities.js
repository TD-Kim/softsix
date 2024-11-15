// assets
import {
  AntDesignOutlined,
  AppstoreAddOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: '대메뉴3',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: '중메뉴 3-1',
      type: 'item',
      // url: '/typography',
      url: '/undefined3-1',
      icon: icons.FontSizeOutlined,
    },
    {
      id: 'util-color',
      title: '중메뉴 3-2',
      type: 'item',
      // url: '/color',
      url: '/undefined3-2',
      icon: icons.BgColorsOutlined,
    },
    {
      id: 'util-shadow',
      title: '중메뉴 3-3',
      type: 'item',
      // url: '/shadow',
      url: '/undefined3-3',
      icon: icons.BarcodeOutlined,
    },
  ],
};

export default utilities;
