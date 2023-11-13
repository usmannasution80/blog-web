import {useState} from 'react';
import AppBar from 'components/AppBar';
import Menu from 'components/Menu';

function App(){
  const [menu, setMenu] = useState(false);
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