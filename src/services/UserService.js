import axios from 'axios'

const USERS_REST_API_URL = 'http://aqmsaws-env.eba-p4pdeysp.ap-northeast-1.elasticbeanstalk.com/api/v1/CompleteDatalist';
const USERS_REST_API_URL1 = 'http://aqmsaws-env.eba-p4pdeysp.ap-northeast-1.elasticbeanstalk.com/api/v1/CarbonMonoxideData';
const USERS_REST_API_URL2 = 'http://aqmsaws-env.eba-p4pdeysp.ap-northeast-1.elasticbeanstalk.com/api/v1/dustparticalData';
const SEND_EMAIL = 'http://aqmsaws-env.eba-p4pdeysp.ap-northeast-1.elasticbeanstalk.com/api/v1/sendEmail';

class UserService {

    /**
     * sends a GET request to the REST API endpoint
     * @returns  url of completeData api
     */
    getList(){
        return axios.get(USERS_REST_API_URL);
    }
    /**
     * sends a GET request to the REST API endpoint
     * @returns url of ozonneData api
     */
    getOzoneData(){
        return axios.get(USERS_REST_API_URL2);
    }
    /**
     * sends a GET request to the REST API endpoint 
     * @returns url of carbondioxideData api
     */

    getCarbonDioxideData(){
        return axios.get(USERS_REST_API_URL1);
    }
    /**
     * sends a post request to the REST API endpoint
     * @returns url of notification post method
     */
    sendEmail(){
        return axios.post(SEND_EMAIL);
    }
}

export default new UserService();