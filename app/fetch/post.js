import 'whatwg-fetch';
import 'es6-promise';

function format(obj) {
  var str = '';
  for(var key in obj){
    if (obj.hasOwnProperty(key)) {
      str += '&' + key + '=' + obj[key];
    }
  }
  if(str){str = str.slice(1);}
  return str;
}

export function post(url, obj) {
  var result = fetch(url,{
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:format(obj)
  });
  return result;
}