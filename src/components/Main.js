import React, { useEffect } from "react";
import { articles } from "../service/Articles";

const Main = () =>{
    useEffect(()=>{
       articles.getArticles()
    }, [])
    return (
        <>
        Main
        <input type={'file'} onChange={(e)=>{
            console.log(e.target.files[0],'qwewq');
        }}/>
        </>
    )
};
export default Main;