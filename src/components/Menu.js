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
import {createTheme, ThemeProvider} from '@mui/material/styles';

function Menu(props){

  const {
    open,
    toggleMenu
  } = props;

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
                <ListItemText primary={'Home'}/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <NewspaperIcon/>
                </ListItemIcon>
                <ListItemText primary={'Artikel'}/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <LocalOfferIcon/>
                </ListItemIcon>
                <ListItemText primary={'Kategori'}/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <ContactMailIcon/>
                </ListItemIcon>
                <ListItemText primary={'Kontak'}/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <LanguageIcon/>
                </ListItemIcon>
                <ListItemText primary={'Ganti Bahasa'}/>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );

}

export default Menu;