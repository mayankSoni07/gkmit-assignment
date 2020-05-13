import axios from 'axios';
import * as URL from '../utilities/commonUrl';

class ApiService {
    constructor() {
        if (!ApiService.instance) {
            ApiService.instance = this;
        }
        return ApiService.instance;
    }

    api(param) {
        const { params, apiName, method, headerData } = param;
        let header = {};
        if (headerData)
            header = headerData;

        let hostURL = URL.HOST_URL;
        
        /** POST request */
        if (method == "POST") {
            return axios.post(hostURL + apiName, params, { headers: header });
        }

        /** PUT request */
        if (method == "PUT") {
            return axios.put(hostURL + apiName, params, { headers: header });
        }

        /** GET request */
        if (method == "GET") {
            return axios.get(hostURL + apiName, { headers: header });
        }

        /** DELETE request */
        if (method == "DELETE") {
            return axios.delete(hostURL + apiName, { headers: header, data: params })
        }
    }
}
const instance = new ApiService();
Object.freeze(instance);
export default instance;