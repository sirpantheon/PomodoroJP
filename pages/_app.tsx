import type { AppProps } from 'next/app';
import Home from "../pages";
import "../styles/index.css";


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
   
     <Home/>
     
  );
}
