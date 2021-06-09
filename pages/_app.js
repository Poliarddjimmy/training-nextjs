import '../styles/globals.css'
import '../styles/main.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

import { ToastProvider } from 'react-toast-notifications';
import * as Service from "../services/ServiceBase";

// testing staging
Service.interceptor(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastProvider>
        <Component {...pageProps}/>
      </ToastProvider>
    </Provider>
  )
}

export default MyApp
