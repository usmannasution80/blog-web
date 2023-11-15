import {
  Paper,
  Box,
  Grid
} from '@mui/material';

function Articles(){
  const els = [];
  const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante felis, a dictum magna pretium id. Aliquam id sagittis nulla, a convallis lacus. Suspendisse nec ante ante. Pellentesque finibus nibh at enim volutpat, at euismod augue tincidunt. Quisque bibendum, metus a accumsan tristique, dui turpis sagittis purus, eu dignissim ligula neque at arcu. Quisque sapien nisi, accumsan eget arcu a, lobortis cursus neque. Nunc sagittis, neque eu vestibulum laoreet, nisl libero accumsan urna, vitae consectetur lorem lectus sed arcu. Sed in laoreet felis. Maecenas rutrum facilisis felis, in tincidunt metus volutpat ut. Curabitur non ligula eu mi elementum pellentesque. Aliquam nisl velit, suscipit in ullamcorper rhoncus, suscipit quis erat. Proin malesuada ultrices risus ac tempor. Etiam porta orci diam, sit amet pharetra urna faucibus a. Suspendisse molestie porttitor est at vulputate.';
  for(let i=0;i<10;i++){
    els.push(
    <Grid item xs={1}>
      <Paper
        sx={{mb:1, overflow:'hidden'}}
        onClick={e => window.web.navigate('/article/' + i)}>
        <img
          width="100%"
          src="https://images.tokopedia.net/img/KRMmCm/2023/9/18/9f609a7c-bcb1-488e-938c-6df8576dea06.jpg"/>
          <Box
            sx={{m:0.5}}
            component="h3"
            children="Lorem ipsum dolor sit amet"/>
          <Box
            sx={{m:0.5,mt:0}}
            component="p"
            children={content.slice(0, 150) + '...'}/>
      </Paper>
    </Grid>
    );
  }
  return (
    <>
      <Grid
        container
        spacing={1}
        columns={{s:1, md:3}}>
        {els}
      </Grid>
    </>
  );
}

export default Articles;
