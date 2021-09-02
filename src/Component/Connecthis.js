import axios from 'axios';

const COVID_API_HISTORY_URL="https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1";
class Connecthis
{

    Connecthistory=async()=>
    {
        var a=await axios.get(COVID_API_HISTORY_URL);
       

        
return (a);
    }
}
export default new Connecthis();