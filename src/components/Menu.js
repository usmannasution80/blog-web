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
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LanguageIcon from '@mui/icons-material/Language';
import LoginIcon from '@mui/icons-material/Login';
import {createTheme, ThemeProvider} from '@mui/material/styles';

function Menu(props){

  const {
    open,
    toggleMenu
  } = props;

  const {_, navigate} = window.web;

  const theme = createTheme({
    components : {
      MuiListItem : {
        defaultProps : {
          disablePadding : true
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
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
                <ListItemText primary={_('home')}/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={e => navigate('/articles')}>
                <ListItemIcon>
                  <NewspaperIcon/>
                </ListItemIcon>
                <ListItemText primary={_('articles')}/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <LocalOfferIcon/>
                </ListItemIcon>
                <ListItemText primary={_('categories')}/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <ContactMailIcon/>
                </ListItemIcon>
                <ListItemText primary={_('contact')}/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <LanguageIcon/>
                </ListItemIcon>
                <ListItemText primary={_('change_language')}/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={e => navigate('/login')}>
                <ListItemIcon>
                  <LoginIcon/>
                </ListItemIcon>
                <ListItemText primary={_('login')}/>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );

}

export default Menu;
