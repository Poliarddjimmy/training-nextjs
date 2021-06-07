import '../styles/globals.css'
import '../styles/main.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

import { ToastProvider } from 'react-toast-notifications';

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
