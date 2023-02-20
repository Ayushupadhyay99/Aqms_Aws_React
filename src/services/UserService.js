import axios from 'axios'

const USERS_REST_API_Base_URL = 'http://aqmsaws-env.eba-p4pdeysp.ap-northeast-1.elasticbeanstalk.com/api/v1';


class UserService {

    /**
     * sends a GET request to the REST API endpoint
     * @returns  url of completeData api
     */
    getList(){
        return axios.get(USERS_REST_API_Base_URL +'/CompleteDatalist');
    }
    /**
     * sends a GET request to the REST API endpoint
     * @returns url of ozonneData api
     */
    getOzoneData(){
        return axios.get(USERS_REST_API_Base_URL + '/dustparticalData');
    }
    /**
     * sends a GET request to the REST API endpoint 
     * @returns url of carbondioxideData api
     */

    getCarbonDioxideData(){
        return axios.get(USERS_REST_API_Base_URL + '/CarbonDioxideData');
    }
    /**
     * sends a post request to the REST API endpoint
     * @returns url of notification post method
     */
    sendEmail(){
        return axios.post(USERS_REST_API_Base_URL + '/sendEmail');
    }
}

export default new UserService();