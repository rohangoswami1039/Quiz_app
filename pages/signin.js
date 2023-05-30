import React from 'react'
import useAuth from '../src/hooks/auth'
import { Card } from 'react-bootstrap'
import { with_public } from '../src/hooks/route'



 function signin() {
    
    const {user,loginWithGoogle,error}=useAuth()
    
    return (
        <div>
        <Card>
            {error && <h1>{error}</h1>}
            <button onClick={loginWithGoogle}>Google Login</button>
            <h1>{user?.uid}</h1>
            <h1>{user?.photoURL}</h1>
        </Card>
        </div>
    )
}


export default with_public(signin);