import React, { useState , useEffect} from 'react'
import {onAuthStateChanged } from "firebase/auth";
import { Auth } from '../config/firebase.config';
import useAuth from '../hooks/auth';

export default function Authchange({children}) {
    const {setuser} = useAuth()
    const [loading,setloading]=useState(true)

    useEffect(() => {
        onAuthStateChanged(Auth, (user) => {
            setuser(user)
            setloading(false)
          });
    }, [])
    if(loading){
        <div>Loading..</div>
    }
    
    return children;
}
