import { useEffect } from "react";

export default function Error(){
    useEffect(()=>{
        document.title = "404";
    },[]);
    return(
        <main>
            <h1>Error 404 Not Found - Página não encontrada</h1>
        </main>
    );
}