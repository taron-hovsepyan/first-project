import { action, makeObservable, observable } from "mobx";

class AuthStore {
    isAuth = false;

    constructor(){
        makeObservable(this, {
            isAuth:observable,
            setIsAuth: action.bound,
        })
    }
    setIsAuth(bool){
        this.isAuth = bool
    }
}
export const authStore = new AuthStore();