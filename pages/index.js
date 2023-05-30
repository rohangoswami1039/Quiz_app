import useAuth from "../src/hooks/auth"
import { with_protected } from "../src/hooks/route"

 function Home() {

  const {logout}=useAuth()
  
  return (
    <div>
      <h1>Home page </h1>
      <button onClick={logout}>logout</button>
    </div>
  )
}
export default with_protected(Home)