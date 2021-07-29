import { Provider } from 'react-redux';
import { store } from './store';
import ActivityApp from './Components/ActivityApp';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ActivityApp />
      </div>
    </Provider>
  );
}

export default App;
