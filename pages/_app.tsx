import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';
import { keepLogin } from './api/signInUp';
axios.defaults.baseURL = "https://www.studykit.site:443/";
axios.defaults.withCredentials = true;
export default function App({ Component, pageProps }: AppProps) {   
  const queryClient = new QueryClient()
  keepLogin();
  return(
    <QueryClientProvider client={queryClient}>
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
    </QueryClientProvider>
  )
}