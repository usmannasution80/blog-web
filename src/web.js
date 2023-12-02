import {_} from 'locales';
import axios from 'axios';

const web = {
  _,
  render : () => 1,
  navigate : () => 1,
  server : (() => {
    let {
      protocol,
      hostname,
      port
    } = window.location;
    if(process.env.NODE_ENV === 'development')
      port = 8000;
    return `${protocol}//${hostname}:${port}/`;
  })(),
  strg(key, value){
    if(arguments.length === 1)
      return window.localStorage.getItem(key);
    window.localStorage.setItem(key, value);
    window.dispatchEvent(new Event('storage'));
  },
  dstrg(key){
    window.localStorage.removeItem(key);
    window.dispatchEvent(new Event('storage'));
  },
  axios : async config => {

    const server = window.web.server;

    if(!/get/gi.test(config.method) && config.method !== undefined){
      await axios({
        url : server + 'sanctum/csrf-cookie',
        withCredentials : true
      });
    }

    config.withCredentials = true;
    config.url = server + 'api/' + config.url;

    const data = await axios(config);
    return data;

  }
};

export default web;
