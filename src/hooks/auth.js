import { createContext, useContext, useState } from "react";
import { AuthService } from "../service/AuthService";



const authContext = createContext()


export default function useAuth(){
    return  useContext(authContext)
}

export function AuthProvider(props){
    const [user, setuser] = useState(null)
    const [error,seterror] = useState("")

    const loginWithGoogle = async ()=>{
        const {error,user}= await AuthService.loginWithGoogle()
        setuser(user ?? null )
        seterror(error ?? "")
    }
    const logout = async()=>{
        await AuthService.logout()
        setuser(null);
    }

    const value= {user,error,loginWithGoogle,logout,setuser}

    return <authContext.Provider value={value} {...props}/>
}