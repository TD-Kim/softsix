// assets
import {
  AntDesignOutlined,
  AppstoreAddOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  ClusterOutlined,
  FontSizeOutlined,
  FormOutlined,
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
  title: '그늘막 관리',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: '그늘막 등록',
      type: 'item',
      // url: '/typography',
      url: '/equipmentRegister',
      icon: FormOutlined,
    },
    {
      id: 'util-color',
      title: '그늘막 현황',
      type: 'item',
      // url: '/color',
      url: '/equipmentStatus',
      icon: ClusterOutlined,
    },
    // {
    //   id: 'util-shadow',
    //   title: '중메뉴 3-3',
    //   type: 'item',
    //   // url: '/shadow',
    //   url: '/undefined3-3',
    //   icon: icons.BarcodeOutlined,
    // },
  ],
};

export default utilities;
