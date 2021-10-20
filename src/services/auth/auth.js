import axios from "axios";

export default function setAuth(token) {
    if(token){
        axios.defaults.headers.common['__authorization_x_token'] = `${token}`
    }else{
        delete axios.defaults.headers.common['__authorization_x_token']
    }
}
