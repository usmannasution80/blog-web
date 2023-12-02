import {
  Box,
  TextField,
  Button
} from '@mui/material';

function Login(){

  const {_} = window.web;
  alert(window.web.server);

  return (
    <Box sx={{maxWidth : '500px', m : 'auto'}}>
      <Box
        component="h1"
        sx={{textAlign:'center'}}
        children={_('login')}/>
      <TextField
        label={_('login')}
        fullWidth
        sx={{mb:1}}/>
      <TextField
        label={_('password')}
        fullWidth
        type="password"
        sx={{mb:1}}/>
      <Button
        variant="contained"
        children={_('login')}/>
    </Box>
  );
}

export default Login;
