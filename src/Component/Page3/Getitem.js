import axios from 'axios';

const item_upi='http://localhost:8082/api/v2/store/';
class Getitem
{
    
addtoCart(item)
{
return axios.get(item_upi+item);
}
}
export default new Getitem();
