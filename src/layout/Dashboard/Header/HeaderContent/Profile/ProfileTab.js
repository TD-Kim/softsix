import PropTypes from 'prop-types';
import { useState } from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import EditOutlined from '@ant-design/icons/EditOutlined';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

export default function ProfileTab() {
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
          <EditOutlined />
        </ListItemIcon>
        <ListItemText primary='프로필 수정' />
      </ListItemButton>

      <ListItemButton selected={selectedIndex === 2}>
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary='로그아웃' />
      </ListItemButton>
    </List>
  );
}

ProfileTab.propTypes = { handleLogout: PropTypes.func };
