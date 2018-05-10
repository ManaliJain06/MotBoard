
import axios from 'axios';

export const charts = () => {
    return axios.post('http://localhost:3300/getChartsData', {withCredentials: true})
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
};