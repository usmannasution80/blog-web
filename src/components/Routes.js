import {Routes, Route} from 'react-router-dom';
import Articles from 'components/Articles';
import Article from 'components/Article';

function MyRoutes(){
  return (
    <Routes>
      <Route path="/articles" element={<Articles/>}/>
      <Route path="/article/:id" element={<Article/>}/>
    </Routes>
  );
}

export default MyRoutes;