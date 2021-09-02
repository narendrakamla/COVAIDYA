import axios from 'axios';

const USER_API="http://localhost:8082/api/v1/users/";


class Createuser  {
    

 createAccount(user)
 {

return axios.post(USER_API,user);
 }

 getById(user)
 {
     
const st=USER_API+user;
     return axios.get(st);
 }
   
}

 

export default new Createuser()  ;

