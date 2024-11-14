import { useState } from 'react';

// material-ui
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// assets
import {
  LockOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';

// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //

export default function SettingTab() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleListItemClick = (e, index) => {
    setSelectedIndex(index);
  };

  return (
    <List
      component='nav'
      sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}
    >
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(e) => handleListItemClick(e, 0)}
      >
        <ListItemIcon>
          <QuestionCircleOutlined />
        </ListItemIcon>
        <ListItemText primary='고객지원' />
      </ListItemButton>

      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(e) => handleListItemClick(e, 1)}
      >
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary='권한설정' />
      </ListItemButton>

      <ListItemButton
        selected={selectedIndex === 2}
        onClick={(e) => handleListItemClick(e, 2)}
      >
        <ListItemIcon>
          <LockOutlined />
        </ListItemIcon>
        <ListItemText primary='인증센터' />
      </ListItemButton>
    </List>
  );
}
