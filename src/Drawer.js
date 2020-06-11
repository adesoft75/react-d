import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { MenuItem } from '@material-ui/core';

const AppDrawer = (props) => {
  return(
    <Drawer 
      open={props.open}
      onClick= {() => props.onClose()}
    >
      <MenuItem
        onClick= {() => props.onMenuTableClick()}
      >Таблицы</MenuItem>
      <MenuItem
        onClick= {() => props.onMenuGraphClick()}
        >Графики</MenuItem>
      <Divider/>
      <MenuItem>Задать параметр</MenuItem>
    </Drawer>
  )
}

export default AppDrawer

/* const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function AppDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, 'left': open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: false,
      })}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List>
        {['Таблицы', 'Графики'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{text === 'Таблицы' ? <Assignment /> : <Assessment />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Задать параметр'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>      
        <React.Fragment key='left'>
          <Button onClick={toggleDrawer('left', true)}>{'left'}</Button>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>      
    </div>
  );
} */