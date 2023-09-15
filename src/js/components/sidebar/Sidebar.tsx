import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import styles from './styles';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Sidebar() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor) => (
    <Box
      id="box-ii"
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 270,
        display: 'flex',
        flexDirection: 'column'
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ paddingTop: '0px' }}>
        <ListItem sx={{ padding: '0px' }}>
          <Box
            sx={{
              minHeight: '107px',
              backgroundColor: '#F9F9F9',
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              columnGap: '12px'
            }}
          >
            <div
              style={{
                height: 65,
                width: 65,
                borderRadius: '50%',
                backgroundColor: 'white',
                overflow: 'hidden',
                marginLeft: '20px'
              }}
            >
              <img
                src="assets/img/profile.png"
                alt=""
                width={65}
                style={{ marginTop: 4 }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '7px'
              }}
            >
              <div
                style={{
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '7px'
                }}
              >
                <span>Sherlock</span>
                <img src="assets/svg/golden-star.svg" alt="" />
              </div>
              <Button sx={[styles.secondary, styles.button]} onClick={() => navigate('/profile')}>
                Manage Profile
              </Button>
            </div>
          </Box>
        </ListItem>

        {[
          { label: 'My orders', iconName: 'cart' },
          { label: 'Saved', iconName: 'saved' },
          { label: 'Sell on Marketplace', iconName: 'marketPlace' }
        ].map((item, index) => (
          <ListItem key={item?.label} disablePadding>
            <ListItemButton>
              <img
                src={`assets/svg/sideNavIcons/${item?.iconName}.svg`}
                style={{ marginRight: '6px' }}
              />
              <ListItemText
                primary={item?.label}
                sx={{ color: '#000', fontSize: '14px' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { label: 'Connected Devices', iconName: 'devices' },
          { label: 'FAQ', iconName: 'faq' },
          { label: 'Help & Support', iconName: 'support' },
          { label: 'Terms, policies & licenses', iconName: 'terms' }
        ].map((item, index) => (
          <ListItem key={item?.label} disablePadding>
            <ListItemButton>
              <img
                src={`assets/svg/sideNavIcons/${item?.iconName}.svg`}
                style={{ marginRight: '6px' }}
              />
              <ListItemText
                primary={item?.label}
                sx={{ color: '#000', fontSize: '14px' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <ListItem key={'settings'} disablePadding>
        <ListItemButton>
          <img
            src={`assets/svg/sideNavIcons/settings.svg`}
            style={{ marginRight: '6px' }}
          />
          <ListItemText
            primary={'App Settings'}
            sx={{ color: '#000', fontSize: '14px' }}
          />
        </ListItemButton>
      </ListItem>
    </Box>
  );

  return (
    <React.Fragment key={'left'}>
      
        <img role='presentation'  onClick={()=>setState({...state, left: true})}  src="assets/svg/header/menu.svg" />
     
      {state['left'] && (
        <Drawer
          anchor={'left'}
          open={true}
          onClose={toggleDrawer('left', false)}
          sx={[styles.drawer]}
        >
          {list('left')}
        </Drawer>
      )}
    </React.Fragment>
  );
}
