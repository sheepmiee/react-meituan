import { get } from '../get'

export function getSearchData(page, cityName, category, keyword) {
  let keywordStr = keyword ? '/' + keyword : '';
  let result = get('/api/search/' + page + '/' + cityName + '/' + category + keywordStr);
  return result;
}