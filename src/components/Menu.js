import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function Menu(props){
  const {
    open,
    toggleMenu
  } = props;
  return (
    <Drawer
      open={open}
      onClose={toggleMenu}>
      <Box
        sx={{minWidth : '250px'}}
        onClick={toggleMenu}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary={'Home'}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default Menu;