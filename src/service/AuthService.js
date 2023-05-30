import { GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {Auth} from '../config/firebase.config'


export const AuthService = {
    loginWithGoogle: async () => {
        const Provider = new GoogleAuthProvider()
        try{
            const userCred = await signInWithPopup(Auth,Provider)
            console.log(userCred)
            return {
                user : userCred.user,
                
            }
        }
        catch (e){
            return {
                error:e.message,
            }
        }
    },
    logout : async ()=>{
        await Auth.signOut()
    }
}