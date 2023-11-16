import {useState} from 'react';
import AppBar from 'components/AppBar';
import Menu from 'components/Menu';
import Routes from 'components/Routes';
import {useNavigate} from 'react-router-dom';
import {Box} from '@mui/material';

function App(){

  const [menu, setMenu] = useState(false);
  const [render, setRender] = useState(-1);
  const navigate = useNavigate();

  window.web.render = () => setRender(render * -1);
  window.web.navigate = navigate;
  window.onstorage = e => alert('storage');//window.web.render();

  return (
    <>
      <AppBar
        toggleMenu={e => setMenu(!menu)}/>
      <Menu
        open={menu}
        toggleMenu={e => setMenu(!menu)}/>
      <Box sx={{p:1}}>
        <Routes/>
      </Box>
    </>
  );

}

export default App;
