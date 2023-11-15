import {Box} from '@mui/material';
import {useParams} from 'react-router-dom';

function Article(){

  const {id} = useParams();
  let content = [];
  for(let i=0;i<10;i++){
    content.push(
      <p style={{textAlign:'justify'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa lorem, egestas et vulputate sit amet, accumsan pretium lorem. Sed ultrices mollis volutpat. Sed pharetra ornare sapien, vel vestibulum lectus scelerisque quis. Maecenas ut metus lacinia, rhoncus nulla vel, volutpat purus. Duis sapien purus, laoreet sed suscipit nec, efficitur a justo. Pellentesque vitae tortor pharetra, ultrices massa ac, congue risus. In eu odio ultricies, tempor libero id, varius odio. Etiam nec eros leo. Phasellus at tortor consequat, efficitur nunc eget, pretium lorem. In condimentum sollicitudin hendrerit. Fusce in massa faucibus, faucibus enim eget, tempor ex. Nam non magna et quam tincidunt scelerisque. In tempor, risus eu dapibus ornare, risus turpis luctus tellus, in aliquam risus arcu eu tellus. Cras mattis lobortis volutpat. Mauris pulvinar nunc mauris, eu venenatis justo suscipit ac. Vestibulum in ornare justo, sed viverra mi.
      </p>
    );
  }

  return (
    <Box sx={{maxWidth:'720px', m:'auto'}}>
      <Box
        component="h2"
        sx={{
          textAlign:'center'
        }}
        children="Lorem ipsum dolor sit amet"/>
      <img
        width="100%"
        src="https://images.tokopedia.net/img/KRMmCm/2023/9/18/9f609a7c-bcb1-488e-938c-6df8576dea06.jpg"/>
      {content}
    </Box>
  );

}

export default Article;
