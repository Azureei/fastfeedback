import '../styles/globals.css';
import { AuthProvider } from '../lib/auth';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
