import React, { useEffect } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Main from "./components/Main";
import { Routes, Route, useNavigate, } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { authStore } from "./store/authStore";

const App = observer(()=>{
    const { isAuth } = authStore
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(isAuth){
            navigate('/main')
        }
    }, [isAuth])

    return (
        <Routes>
            <Route path="/" element={<SignUp/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/main" element={<Main/>}/>
        </Routes>
    )
})

export default App