
import './App.css'
import { Provider } from 'react-redux';
import { store } from './store';
import UserData from './Pages/UserData'

function App() {

  return (
    <>
  <Provider store={store}>
  <UserData/>
  </Provider>,
    </>
  )
}

export default App
