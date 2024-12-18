import { useRef, useState } from 'react';

import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import Transitions from 'components/@extended/Transitions';
import MainCard from 'components/MainCard';

import BellOutlined from '@ant-design/icons/BellOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';

// mock 데이터
import notificationMock from 'mock/notificationMock.json';
import NotificationListItem from './NotificationListItem';

// sx styles
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem',
};

const actionSX = {
  mt: '6px',
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none',
};

// ==============================|| HEADER CONTENT - NOTIFICATION ||============================== //

export default function Notification() {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const anchorRef = useRef(null);
  const [read, setRead] = useState(2);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = 'grey.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color='secondary'
        variant='light'
        sx={{
          color: 'text.primary',
          bgcolor: open ? iconBackColorOpen : 'transparent',
        }}
        aria-label='open profile'
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
      >
        <Badge badgeContent={read} color='primary'>
          <BellOutlined />
        </Badge>
      </IconButton>
      <Popper
        placement={matchesXs ? 'bottom' : 'bottom-end'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            { name: 'offset', options: { offset: [matchesXs ? -5 : 0, 9] } },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions
            type='grow'
            position={matchesXs ? 'top' : 'top-right'}
            in={open}
            {...TransitionProps}
          >
            <Paper
              sx={{
                boxShadow: theme.customShadows.z1,
                width: '100%',
                minWidth: 285,
                maxWidth: { xs: 285, md: 420 },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  title='알림'
                  elevation={0}
                  border={false}
                  content={false}
                  secondary={
                    <>
                      {read > 0 && (
                        <Tooltip title='Mark as all read'>
                          <IconButton
                            color='success'
                            size='small'
                            onClick={() => setRead(0)}
                          >
                            <CheckCircleOutlined
                              style={{ fontSize: '1.15rem' }}
                            />
                          </IconButton>
                        </Tooltip>
                      )}
                    </>
                  }
                >
                  <List
                    component='nav'
                    sx={{
                      p: 0,
                      '& .MuiListItemButton-root': {
                        py: 0.5,
                        '&.Mui-selected': {
                          bgcolor: 'grey.50',
                          color: 'text.primary',
                        },
                        '& .MuiAvatar-root': avatarSX,
                        '& .MuiListItemSecondaryAction-root': {
                          ...actionSX,
                          position: 'relative',
                        },
                      },
                    }}
                  >
                    {notificationMock.map((item, idx) => (
                      <NotificationListItem key={idx} read={read} item={item} />
                    ))}
                    {/* <ListItemButton selected={read > 0}>
                      <ListItemAvatar>
                        <Avatar
                          sx={{
                            color: 'primary.main',
                            bgcolor: 'primary.lighter',
                          }}
                        >
                          <CheckOutlined />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant='h6'>
                            It&apos;s{' '}
                            <Typography component='span' variant='subtitle1'>
                              Cristina danny&apos;s
                            </Typography>{' '}
                            birthday today.
                          </Typography>
                        }
                        secondary='2 min ago'
                      />
                      <ListItemSecondaryAction>
                        <Typography variant='caption' noWrap>
                          3:00 AM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>

                    <Divider />

                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          sx={{
                            color: 'error.main',
                            bgcolor: 'error.lighter',
                          }}
                        >
                          <CloseOutlined />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant='h6'>
                            <Typography component='span' variant='subtitle1'>
                              Aida Burg
                            </Typography>{' '}
                            commented your post.
                          </Typography>
                        }
                        secondary='5 August'
                      />
                      <ListItemSecondaryAction>
                        <Typography variant='caption' noWrap>
                          6:00 PM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>

                    <Divider /> */}

                    <ListItemButton
                      sx={{ textAlign: 'center', py: `${12}px !important` }}
                    >
                      <ListItemText
                        primary={
                          <Typography variant='h6' color='primary'>
                            View All
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </List>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
}
