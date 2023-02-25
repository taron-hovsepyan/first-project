import { APIT_URL } from "../core/constants";
import { getCookie } from "../core/helpers";

class Articles{
    getArticles(){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        const accessToken = getCookie('accessToken') 
        if(accessToken){
            headers.append('Authorization', `Basic ${btoa('admin : 12345')}`)
        }
        fetch('https://apingweb.com/api/auth/users', {
            method:'GET',
            headers,
            body:null,
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
        }
        )
    }
}
export const articles = new Articles();