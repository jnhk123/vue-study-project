import axios from "axios";
import store from "@/store";

export default {

    methods : {
        async $api(url, method, data, errorCallback) {
            return axios({
                headers: {
                    Authorization: `Bearer ${store.getters.token}`
                },
                method: method
                , url
                , data
            }).catch(e => {
                if(errorCallback){
                    errorCallback(e.response);
                } else if(e.response?.data?.error){
                    alert(e.response.data.error);
                } else {
                    console.error(e);
                }
            });
        }
    }

}