import {_} from 'locales';

const web = {
  _,
  render : () => 1,
  navigate : () => 1,
  strg(key, value){
    if(arguments.length === 1)
      return window.localStorage.getItem(key);
    window.localStorage.setItem(key, value);
    window.dispatchEvent(new Event('storage'));
  },
  dstrg(key){
    window.localStorage.removeItem(key);
    window.dispatchEvent(new Event('storage'));
  }
};

export default web;
