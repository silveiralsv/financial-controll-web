import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";

import {SideBar} from '../Components/SideBar';
import {Content} from '../Components/Content';

function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <>
      <SideBar > 
        <Content>
          <Component {...pageProps} />    
        </Content>
      </SideBar>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}
export default MyApp
