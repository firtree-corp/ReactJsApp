import AbstractService from './AbstractService';
import root from '../.api_root';
import { sha256 } from 'js-sha256';

class UserService extends AbstractService {
    logIn(options) {
        options.password = sha256(options.password);
        options.password = sha256(options.password);
        return this.request({
            method: 'GET',
            url: root.REACT_APP_API_ROOT + 'users/login?login=' + options.user + '&password=' + options.password
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }

    logUp(options) {
        options.password = sha256(options.password);
        options.password = sha256(options.password);
        return this.request({
            method: 'POST',
            url: root.REACT_APP_API_ROOT + 'users/new',
            json: {
                password: options.password,
                login: options.user,
                email: options.mail
            }
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData.json();
        });
    }
}

export default new UserService();