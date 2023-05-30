import '../styles/globals.css'
import '../src/config/firebase.config'
import '../styles/login.css'
import { AuthProvider } from '../src/hooks/auth'
import Authchange from '../src/layout/Authchange';

function MyApp({ Component, pageProps }) {
  return(
  <AuthProvider>
    <Authchange>
    <Component {...pageProps} />
    </Authchange>
  </AuthProvider>);
 }

export default MyApp
