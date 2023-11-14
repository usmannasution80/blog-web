import id from 'locales/id';

const dictionaries = {
  id
};

const _ = key => {
  let lang = window.web.lang;
  if(!lang)
    lang = 'id';
  if(!dictionaries[lang])
    lang = 'id';
  let dictionary = dictionaries[lang];
  return dictionary[key] || '';
};

export {_};