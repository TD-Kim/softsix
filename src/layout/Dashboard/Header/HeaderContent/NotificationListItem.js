import {
  Divider,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@mui/material';
import Avatar from 'components/@extended/Avatar';

import { CheckOutlined } from '@ant-design/icons';
import { getHourMinutes, timeAgo } from 'utils/getTimes';

{
  /* <Typography component='span' variant='subtitle1'>
                Cristina danny&apos;s
              </Typography>{' '} */
}

function NotificationListItem({ read, item }) {
  const status =
    item.status === 'open'
      ? 'primary'
      : item.status === 'close'
      ? 'success'
      : 'error'; // open: primary, close: success, error: error
  return (
    <>
      <ListItemButton selected={read > 0}>
        <ListItemAvatar>
          <Avatar
            sx={{
              color: `${status}.main`,
              bgcolor: `${status}.lighter`,
            }}
          >
            <CheckOutlined />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          sx={{ mr: 2 }}
          primary={
            <Typography variant='h6' component='span'>
              {item.sunShadeNo} {item.message}
            </Typography>
          }
          secondary={timeAgo(item.executionTime)}
        />
        <ListItemSecondaryAction>
          <Typography variant='caption' noWrap>
            {getHourMinutes(item.executionTime)}
          </Typography>
        </ListItemSecondaryAction>
      </ListItemButton>

      <Divider />
    </>
  );
}

export default NotificationListItem;
