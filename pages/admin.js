import React from 'react'
import useAuth from '../src/hooks/auth'
import { with_protected } from '../src/hooks/route'

 function admin() {
    
    const [logout]=useAuth()
   
    return (
        <div>
            <button onClick={logout}></button>
        </div>
    )
}
export default with_protected(admin)