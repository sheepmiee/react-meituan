import { get } from '../get'
import { post } from '../post'

export function getOrderListData(username) {
    let result = get('/api/orderlist/' + username);
    return result
}

export function postComment(id, comment, star) {
    let data = {id, comment, star};
    let result = post('/api/submitComment', data);
    return result
}