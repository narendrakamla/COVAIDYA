import axios from 'axios';

const COVID_API_BASE_URL="https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";


class Connectd1  {
    

    getConnect()
    {
   
        try
        {
            var a=axios.get(COVID_API_BASE_URL);
            
        }
        catch(error)
        {
            console.log(error)
        };
        return a;
    }
   
}

 

export default new Connectd1()  ;

