import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';
axios.defaults.baseURL = "https://www.studykit.site:443";
axios.defaults.withCredentials = true;
export default function App({ Component, pageProps }: AppProps) {   
  const queryClient = new QueryClient()
  return(
    <QueryClientProvider client={queryClient}>
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
    </QueryClientProvider>
  )
}