
import './App.css';
import MainComponent from './component/mainComponent';
import { BrowserRouter } from 'react-router-dom';
import {Provider } from "react-redux";
import {store} from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
         <MainComponent />
       </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
