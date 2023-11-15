import {Routes, Route} from 'react-router-dom';
import Articles from 'components/Articles';
import Article from 'components/Article';
import Login from 'components/Login';

function MyRoutes(){
  return (
    <Routes>
      <Route path="/articles" element={<Articles/>}/>
      <Route path="/article/:id" element={<Article/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default MyRoutes;
