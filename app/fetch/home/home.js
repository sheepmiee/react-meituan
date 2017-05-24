import {get} from '../get';

function getAdData() {
  const res = get('api/homead');
  return res;
}
function getListData(city,page) {
  const res = get('api/homelist/'+encodeURIComponent(city)+'/'+page);
  return res;
}
export {getAdData,getListData};