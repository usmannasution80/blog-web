import {useState} from 'react';
import AppBar from 'components/AppBar';
import Menu from 'components/Menu';

function App(){

  const [menu, setMenu] = useState(false);
  const [render, setRender] = useState(-1);

  window.web.render = () => setRender(render * -1);

  return (
    <>
      <AppBar
        toggleMenu={e => setMenu(!menu)}/>
      <Menu
        open={menu}
        toggleMenu={e => setMenu(!menu)}/>
    </>
  );
}

export default App;