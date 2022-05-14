import axios from "axios"
import store from '@/store'

export default {

    methods : {

        $api(url, data, method) {
            return axios({
                baseURL: 'https://api.devcury.kr',
                method,
                url,
                data,
                headers : {
                    Authorization : `Bearer ${store.getters.token}`
                }
            });
        },

    }


}