import axios from "axios";
import { APIT_URL } from "../core/constants";
import { setCookie } from "../core/helpers";
import { authStore } from "../store/authStore";

const pathName = {
    register: 'register',
    login: 'login'
}

class AuthService{
    register(data){
        const url = `${APIT_URL}${pathName.register}`
        // const result = axios.post(url , data)
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials' : '*',
            }
        })
        window.location.pathname = '/login'
    }

    login(data){
        const url = `${APIT_URL}${pathName.login}`
        // const result = axios.post(url , data)
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials' : '*',
            }
        }).then(res =>{
            return res.json()
        }).then((result)=>{
            if(result.success){
                setCookie('accessToken' , result.token , 0.1)
                authStore.setIsAuth(true)
            }
        })
    }

}
export const authService = new AuthService();