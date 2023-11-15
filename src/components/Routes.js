import {Routes, Route} from 'react-router-dom';
import Articles from 'components/Articles';

function MyRoutes(){
  return (
    <Routes>
      <Route path="/articles" element={<Articles/>}/>
    </Routes>
  );
}

export default MyRoutes;