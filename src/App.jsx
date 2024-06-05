import { Provider } from 'react-redux';
import './App.css'
import store from './redux/store';
import Todo from './redux/components/Todo';

function App() {
  return (
    <Provider store={store}> 
      <Todo></Todo>
    </Provider>
  );
}

export default App
