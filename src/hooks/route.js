import { useRouter } from 'next/dist/client/router';
import React from 'react'
import useAuth from './auth';

export  function with_public(Component) {
    return function With_public(props){
    const auth = useAuth();
    const router=useRouter()


    if (auth.user){
        router.replace("/");
        return <h1>Loading...</h1>
    }
    return<Component auth={auth} {...props}/>
    }    
}

export function with_protected(Component){
    return function With_protected(props){
        const auth = useAuth();
        
    
    
        if (!auth.user){
            const p_router=useRouter();
            p_router.push("/signin");
            return <h1>Loading...</h1>
        }
        return<Component auth={auth} {...props}/>
        }

}